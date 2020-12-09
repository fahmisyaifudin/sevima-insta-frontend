<template>
    <div>
        <MyNavigation />
         <main class="edit-profile">
            <section class="profile-form">
                <header class="profile-form__header">
                    <div class="profile-form__avatar-container">
                        <img 
                            src="images/avatar.png"
                            class="profile-form__avatar"
                        />
                    </div>
                    <h4 class="profile-form__title">{{ cookies.username }}</h4>
                </header>
                <form class="edit-profile__form">
                    
                    <div class="edit-profile__form-row">
                        <label for="bio" class="edit-profile__label">
                            Caption
                        </label>
                        <textarea id="bio" v-model="input.caption" class="edit-profile__textarea"></textarea>
                    </div>
                    <div class="edit-profile__form-row">
                        <label for="photo" class="edit-profile__label">
                            Photo
                        </label>
                        <input type="file" @change="previewFile" class="form-control-file">
                    </div>
                    
                    <div class="edit-profile__form-row">
                        <label class="edit-profile__label"></label>
                        <input @click="createStory()" type="button" value="Submit">
                    </div>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
import MyNavigation from "@@/components/Navigation"

export default {
    components: { MyNavigation },
    middleware: 'auth',
    data(){
        return {
            input: {}
        }
    },
    computed: {
            cookies(){
                return this.$cookies.get('nuxt_session')
            }
    },
    methods: {
         previewFile(event){
            this.input.photo = event.target.files[0]
        },
        async createStory(){
            try {
                let input = new FormData();
                input.append('photo', this.input.photo);
                input.append('user_id', this.cookies.id);
                input.append('caption', this.input.caption);

                const story = await this.$axios.$post('/story', input);
                if (story.status == 200) {
                    this.$router.push('/')
                }
            } catch (err) {
                alert(err)
            }
        }
    }
}
</script>