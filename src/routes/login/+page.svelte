<script lang="ts">
  import { Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
</script>

<div class="mt-20 flex flex-col justify-center items-center px-4">
  <Register divClass="w-full bg-light rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <svelte:fragment slot="top">
      <div class="justify-center items-center flex flex-col gap-4">
        <img class="w-20 h-20" src="/img/logo.png" alt="logo" />
        Parkémon Go
      </div>
    </svelte:fragment>
    <div class="p-6 space-y-8">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 p-0">
          Sign in or Register
        </h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input
            type="email"
            name="email"
            value="nils.jugel@gmail.com"
            required
          />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input
            type="password"
            name="password"
            value="JASafasanfjasnfjkasnf"
            required
          />
        </Label>
        <div class="flex items-start">
          <Checkbox checked>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-green-700 hover:underline"
            >Forgot password?</a
          >
        </div>
        <Button type="submit" href="/" class="w-full">Sign in</Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a
            href="/"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Register here</a
          >
        </p>
      </form>
    </div>
  </Register>
</div>
