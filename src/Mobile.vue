<script setup>
import { ref } from 'vue';

const show = ref(false)
const fname = ref('')
const lname = ref('')
const email = ref('')
const password = ref('')

const check = (event) => {
    event.preventDefault();
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(email.value) || pattern.test == '' || fname.value == '' || lname.value == '' || password.value == '') {
        show.value = true;
    } else {
        show.value = false;
    }
}
</script>

<template>
    <main class="font-poppins text-[16px] m-0 p-0 box-border w-[375px] mx-auto min-h-screen bg-[url('./src/assets/images/bg-intro-mobile.png')] object-cover  bg-RED">
        <section class="flex flex-col items-center pt-20 ">
            <h1 class="text-3xl font-bold text-white mb-10 w-[300px] text-center">Learn to code by watching others</h1>
            <p class="w-[320px] text-center text-white mb-10">
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
                understanding how developers think is invaluable.
            </p>
            <div class="mx-5 h-[100px] px-16 text-center bg-purple-700 mb-5 rounded-xl flex justify-center items-center shadow-[rgba(0,0,15,0.2)_0px_6px_0px_0px]">
            <p class="text-white">
                <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
            </div>
            <form action="" class="mb-20 flex flex-col mx-5 h-auto bg-white rounded-xl px-5 py-8 gap-6 shadow-[rgba(0,0,15,0.2)_0px_8px_0px_0px]">
                <input v-model="fname" class="px-5 py-3 border-2 border-solid border-gray-blue rounded-md" :class="{'border-2 border-red-500' : show}" :placeholder="show ? '' : 'First Name'" type="text">
                <img v-if="show" class="w-[25px] absolute translate-x-[250px] translate-y-[13px]" src="./assets/images/icon-error.svg" alt="error">
                <div v-if="show" class="flex items-end justify-end -mt-5 -mb-2 text-[12px] text-red-500">
                    <p><em>First Name cannot be empty</em></p>
                </div>
                
                <input v-model="lname" class="px-5 py-3 border-2 border-solid border-gray-blue rounded-md" :class="{'border-2 border-red-500' : show}" :placeholder="show ? '' : 'Last Name'" type="text" >
                <img v-if="show" class="w-[25px] absolute translate-x-[250px] translate-y-[102px]" src="./assets/images/icon-error.svg" alt="error">
                <div v-if="show" class="flex items-end justify-end -mt-5 -mb-2 text-[12px] text-red-500">
                    <p><em>Last Name cannot be empty</em></p>
                </div>

                <input v-model="email" class="px-5 py-3 border-2 border-solid border-gray-blue rounded-md" :class="{'border-2 border-red-500' : show}" :placeholder="show ? 'email@example.com' : 'Email Address'" type="Email">
                <img v-if="show" class="w-[25px] absolute translate-x-[250px] translate-y-[191px]" src="./assets/images/icon-error.svg" alt="error">
                <div v-if="show" class="flex items-end justify-end -mt-5 -mb-2 text-[12px] text-red-500">
                    <p><em>Looks like this is not an email</em></p>
                </div>

                <input v-model="password" class="px-5 py-3 border-2 border-solid border-gray-blue rounded-md" :class="{'text-red-500 border-2 border-red-500' : show}" :placeholder="show ? '' : 'Password'" type="password">
                <img v-if="show" class="w-[25px] absolute translate-x-[250px] translate-y-[280px]" src="./assets/images/icon-error.svg" alt="error">
                <div v-if="show" class="flex items-end justify-end -mt-5 -mb-2 text-[12px] text-red-500">
                    <p><em>Password cannot be empty</em></p>
                </div>

                <button @click="check($event)" class="px-5 py-3 uppercase bg-GREEN text-white font-semibold rounded-lg hover:bg-opacity-65 shadow-inner-lg">Claim your free trial </button>
                <p class="text-opacity-80 text-gray-blue text-[12px] text-center -mt-3 ">By clicking the button, you are agreeing to our <a href="" class="text-RED font-semibold">Terms and Services</a></p>
            </form>
        </section>

    </main>
</template>