<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import blogs from '@/constants/blog/blogs'

const route = useRoute()
const currentBlog = computed<Blog>(() => blogs.find(blog => blog.id === Number.parseInt(String(route.params.blog), 10)))

const getImage = (index: number): boolean => {
  if (!currentBlog.value?.images) return false

  return currentBlog.value.images.find(image => image.afterIndex === index)
}
</script>

<template>
  <section
     v-if="currentBlog"
    class="blog text-white px-4 md:pl-7 w-[98%]"
  >
    <!-- Breadcrumb starts -->
    <Breadcrumb
      :breadcrumbs="$route.meta.breadcrumb"
      :currentPage="currentBlog.title"
    />
    <!-- Breadcrumb ends -->

    <!-- Header starts -->
    <header class="flex justify-between items-center my-5">
      <div>
        <h4 class="heading english-font-only font-semibold text-center md:text-left">
          {{ currentBlog.title }}
        </h4>
        <span class="text-gray-500">{{ currentBlog.author }}</span>
      </div>

      <h6
        class="inline-flex items-center bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
        <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
        {{ currentBlog.date }}
      </h6>
    </header>
    <!-- Header ends -->

    <!-- Main content starts -->
    <main>
      <!-- Project description starts -->
      <Card class="col-span-3 md:col-span-2 row-span-3 py-6 px-4">
        <CardContent class="english text-zinc-400">
          <div v-for="(content, index) of currentBlog.content" :key="index">
            <p class="mb-6">
              {{ content }}
            </p>

            <div v-if="currentBlog.images && getImage(index)" class="my-6">
              <img
                :src="getImage(index).src"
                :alt="getImage(index).alt"
                class="mb-1 rounded-md"
              />
              <span v-if="currentBlog.images && getImage(index)" class="text-gray-400">
                {{ getImage(index).caption }}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <!-- Project description ends -->

      <!-- References -->
      <Card class="my-4 p-4">
        <h4 class="heading english-font-only font-semibold text-center md:text-left">
          References
        </h4>
        <p v-for="reference in currentBlog.references" :key="reference" class="py-2 english text-zinc-400">
          <span>{{ reference.author }} </span>
          <a
            :href="reference.link"
            target="_blank"
            class="text-yellow-600 hover:text-yellow-400 transition duration-300 ease-in-out underline-offset-2 underline mx-1"
          >
            {{ reference.title }}
          </a>
          <span> {{ reference.details }}</span>
        </p>
      </Card>
    </main>
    <!-- Main content ends -->

    <slot name="footer" />
  </section>
</template>