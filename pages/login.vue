<template>
  <div>
        <main class="login">
            <div class="login__column">
                <img 
                    src="images/phone.png"
                    alt="Phone Image"
                    title="Phone Image"
                    class="login__phone-image"
                />                
            </div>
            <section class="login__column">
                <div class="login__section login__sign-in">
                    <img 
                        src="images/logo.png"
                        alt="Logo"
                        title="Logo"
                        class="login__logo"
                    />
                    <!-- x   -->
                    <form class="login__form">
                        <div class="login__input-container">
                            <input 
                                type="text"
                                name="username"
                                v-model="input.username"
                                placeholder="Username"
                                required
                                class="login__input"
                            />
                        </div>
                        <div class="login__input-container">
                            <input 
                                type="password"
                                name="password"
                                v-model="input.password"
                                placeholder="Password"
                                required
                                class="login__input" 
                            />
                        </div>
                        <div class="login__input-container">
                            <input
                                @click="login()"
                                type="button"
                                value="Log in"
                                class="login__input login__input--btn"
                            />
                        </div>
                    </form>
                </div>
                <div class="login__section login__sign-up">
                    <span class="login__text">
                        Don't have an account? 
                        <nuxt-link to="/register"><a class="login__link">
                            Sign up
                        </a></nuxt-link>
                    </span>
                </div>
            </section>
        </main>
    </div>
</template>

<script>

export default {
   data(){
       return {
           input: {},
           error: null
       }
   },
   methods: {
      async login(){
           event.preventDefault();
           try {
                const login = await this.$axios.post('/login', this.input)
                console.log(login.status)
                if (login.status == 200) {
                     this.$cookies.set('nuxt_session', login.data.data, {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 7
                    })
                    this.$router.push('/')
                }   
           }catch(err){
                alert(err)
           }
       }
   }
}
</script>