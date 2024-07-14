<script setup>
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import useLayout from '@/stores/layout'

const layout = useLayout()
</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
    >
      {{ $t('contact.get-in-touch') }}
    </h4>

    <Card class="card-background p-3">
      <CardContent class="english pt-5">
        <!-- Name starts -->
        <div class="flex mb-8 input-box">
          <div class="py-3 px-4 dark-background centralise input-icon">
            <FontAwesomeIcon class="w-[20px]" :icon="faUser" />
          </div>
          <Input class="h-[50px]" type="text" placeholder="Name" />
        </div>
        <!-- Name ends -->

        <!-- Email starts -->
        <div class="flex mb-8 input-box">
          <div class="py-3 px-4 dark-background centralise input-icon">
            <FontAwesomeIcon class="w-[20px]" :icon="faEnvelope" />
          </div>
          <Input class="h-[50px]" type="text" placeholder="Email" />
        </div>
        <!-- Email ends -->

        <!-- Message starts -->
        <div class="flex mb-8 input-box">
          <div class="py-3 px-4 dark-background input-icon">
            <FontAwesomeIcon class="w-[20px]" :icon="faMessage" />
          </div>
          <Textarea
            rows="6"
            placeholder="Message"
          />
        </div>
        <!-- Message ends -->
      </CardContent>

      <CardFooter class="flex justify-end">
        <div>
          <Button
            :data-locale="layout.locale"
            class="explore-btn bg-yellow mt-6 text-[11px] font-semibold text-black rounded-none py-[1.4rem] px-10 border-yellow hover:text-white hover:bg-transparent"
            :class="layout.locale === 'np' ? '' : 'tracking-widest'"
          >
            {{ $t('actions.send-message') }}
          </Button>
        </div>
      </CardFooter>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
.input-icon {
  transition: all 0.5s ease;
}
.input-box:focus-within .input-icon {
  background-color: var(--yellow);
  color: #333;
}
textarea::placeholder,
input::placeholder {
  font-size: 12px;
}
</style>
