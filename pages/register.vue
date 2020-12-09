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
                    <form method="post" class="login__form">
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
                                type="text"
                                name="full_name"
                                v-model="input.name"
                                placeholder="Full Name"
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
                                @click="register()" 
                                type="button"
                                value="Register"
                                class="login__input login__input--btn"
                            />
                        </div>
                        
                    </form>
                </div>
                <div class="login__section login__sign-up">
                    <span class="login__text">
                        Have an account? 
                        <nuxt-link to="/login"><a class="login__link">
                            Login
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
       async register(){
           event.preventDefault();
           try {
                const register = await this.$axios.post('/register', this.input)
                if (register.status == 200) {
                        this.$router.push('/login')
                }   
           }catch(err){
                alert(err)
           }
       }
   }
}
</script>