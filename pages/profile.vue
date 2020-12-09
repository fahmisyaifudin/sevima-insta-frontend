<template>
    <div>
        <MyNavigation />
        <main class="profile-container">
            <section class="profile">
                <header class="profile__header">
                    <div class="profile__avatar-container">
                        <img 
                            src="images/avatar.png"
                            class="profile__avatar"
                        />
                    </div>
                    <div class="profile__info">
                        <div class="profile__name">
                            <h1 class="profile__title">{{ cookies.username }}</h1>
                            <a @click="logout()" class="profile__button u-fat-text">Logout</a>
                        </div>
                       
                        <div class="profile__bio">
                            <span class="profile__full-name u-fat-text">{{ cookies.name }}</span>
                            <p class="profile__full-bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rerum consequuntur aperiam, dicta delectus nihil voluptas explicabo sapiente quisquam. Eius ipsam asperiores excepturi maiores, atque voluptatum sed fuga esse molestiae.</p>
                          
                        </div>
                    </div>
                </header>
                <div class="profile__pictures" v-for="story in stories" :key="story.id">
                    <nuxt-link :to="{ path: 'detail/' + story.id }">
                        <a class="profile-picture">
                            <img
                                :src="$baseURL + story.photo"
                                class="profile-picture__picture"
                            />
                            <div class="profile-picture__overlay">
                                <span class="profile-picture__number">
                                    <i class="fa fa-heart"></i> {{ story.like.length }}
                                </span>
                                <span class="profile-picture__number">
                                    <i class="fa fa-comment"></i> {{ story.comment.length }}
                                </span>
                            </div>
                        </a>
                    </nuxt-link>                
                </div>
            </section>
        </main>
    </div>
</template>


<script>
import MyNavigation from "@@/components/Navigation"

export default {
    components: { MyNavigation },
    middleware: 'auth',
    computed: {
        cookies(){
            return this.$cookies.get('nuxt_session')
        },
        postId(){
          return this.$route.params.id
        }
    },
    data(){
        return {
            stories: null
        }
    },
    created(){
        this.getMyStory()
    },
    methods: {
        async getMyStory(){
           try{
               const timeline = await this.$axios.post('/my-story', { user_id: this.cookies.id });
               this.stories = timeline.data.data;
           }catch(err){
               alert(err);
           }  
       },
       logout(){
           this.$cookies.remove('nuxt_session');
           this.$router.push('/');
       }
    }
}
</script>