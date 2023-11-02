<script setup lang="ts">
import { FormKitKitchenSink } from "@formkit/vue";
</script>

<template>
  <div>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/login']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/tshirt']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/survey']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/registration']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :schemas="['form/application']" />
    </Suspense>
    <Suspense>
      <FormKitKitchenSink :pro="true" />
    </Suspense>
  </div>
</template>
