<script setup>
import { ref } from 'vue'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import useLayout from '@/stores/layout'
import emailjs from 'emailjs-com'
import { useRecaptchaProvider, useChallengeV2 } from 'vue-recaptcha/head'
import { useForm } from 'vee-validate'
import { useToast } from '@/components/ui/toast/use-toast'
import ContactValidation from './validations'

useRecaptchaProvider()
const { root, execute, onVerify } = useChallengeV2({
  options: {
    size: 'invisible',
  },
})

const layout = useLayout()
const { toast } = useToast()
const isProcessing = ref(false)

/** Form Validation */
const {
  values, errors, handleSubmit, handleReset, defineField,
} = useForm({
  validationSchema: ContactValidation,
})

const [name, nameAttr] = defineField('name')
const [email, emailAttr] = defineField('email')
const [message, messageAttr] = defineField('message')

/** Sending Message */
const sendMessage = reCAPTCHA => {
  const serviceId = import.meta.env.VITE_APP_EMAIL_SERVICE_ID
  const templateId = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID
  const userId = import.meta.env.VITE_APP_EMAIL_USER_ID

  const params = {
    ...values,
    'g-recaptcha-response': reCAPTCHA,
  }

  emailjs.send(serviceId, templateId, params, userId)
    .then(() => {
      toast({
        title: 'Message sent successfully!',
        isMessage: true,
      })
      handleReset()
    })
    .catch(() => {
      toast({
        title: 'Uh oh! Something went wrong!',
        variant: 'destructive',
      })
    })
    .finally(() => {
      isProcessing.value = false
    })
}

const onSubmit = handleSubmit(() => {
  isProcessing.value = true
  execute()
})

onVerify(response => {
  sendMessage(response)
})

</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
    >
      {{ $t('contact.get-in-touch') }}
    </h4>

    <!-- Contact form starts -->
    <Card class="card-background py-3 md:p-3">
      <CardContent class="english p-4 md:p-6">
        <!-- Name starts -->
        <div class="mb-4">
          <div class="flex input-box">
            <div class="py-3 px-4 dark-background centralise input-icon">
              <FontAwesomeIcon
                class="icon w-[20px]"
                :class="{ 'text-red-500': errors.name }"
                :icon="faUser"
              />
            </div>
            <Input
              v-model="name"
              v-bind="nameAttr"
              class="h-[50px]"
              :class="{ 'border border-red-500': errors.name }"
              type="text"
              placeholder="Name"
            />
          </div>
          <small class="text-red-400 ml-14">{{ errors.name }}</small>
        </div>
        <!-- Name ends -->

        <!-- Email starts -->
        <div class="mb-4">
          <div class="flex input-box">
            <div class="py-3 px-4 dark-background centralise input-icon">
              <FontAwesomeIcon
                class="icon w-[20px]"
                :class="{ 'text-red-500': errors.email }"
                :icon="faEnvelope"
              />
            </div>
            <Input
              v-model="email"
              v-bind="emailAttr"
              class="h-[50px]"
              :class="{ 'border border-red-500': errors.email }"
              type="text"
              placeholder="Email"
            />
          </div>
          <small class="text-red-400 ml-14">{{ errors.email }}</small>
        </div>
        <!-- Email ends -->

        <!-- Message starts -->
        <div class="mb-4">
          <div class="flex input-box">
            <div class="py-3 px-4 dark-background input-icon">
              <FontAwesomeIcon
                class="icon w-[20px]"
                :class="{ 'text-red-500': errors.message }"
                :icon="faMessage"
              />
            </div>
            <Textarea
              v-model="message"
              v-bind="messageAttr"
              :class="{ 'border border-red-500': errors.message }"
              rows="6"
              placeholder="Message"
            />
          </div>
          <small class="text-red-400 ml-14">{{ errors.message }}</small>
        </div>
        <!-- Message ends -->
      </CardContent>

      <CardFooter class="flex justify-end">
          <Button
            :data-locale="layout.locale"
            class="explore-btn mt-6 text-[11px] font-semibold rounded-none py-[1.4rem] px-10 border-yellow hover:text-white hover:bg-transparent"
            :class="[
              layout.locale === 'np' ? '' : 'tracking-widest',
              isProcessing ? 'bg-transparent text-white' : 'bg-yellow text-black'
            ]"
            @click="onSubmit"
          >
            <Spinner v-if="isProcessing" />
            <span class="ml-2">{{ $t('actions.send-message') }}</span>
          </Button>
      </CardFooter>
    </Card>
    <!-- Contact form ends -->
    <div ref="root" />
  </section>
</template>

<style lang="scss" scoped>
.input-icon {
  transition: all 0.5s ease;
}
.input-box:focus-within {
  .input-icon {
    background-color: var(--yellow);
    .icon {
      color: #333;
    }
  }
}
textarea::placeholder,
input::placeholder {
  font-size: 12px;
}
</style>
