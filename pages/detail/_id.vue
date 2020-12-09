<template>
  <div>
        <MyNavigation />
        <main class="feed">
            <section class="photo">
                <header class="photo__header">
                    <div class="photo__header-column">
                        <img
                            class="photo__avatar"
                            src="@/static/images/avatar.png"
                        />
                    </div>
                    <div class="photo__header-column">
                        <span class="photo__username">{{ story.user.username }}</span>
                    </div>
                </header>
                <div class="photo__file-container">
                    <img
                        class="photo__file"
                        :src="$baseURL + story.photo"
                    />
                </div>
                <div class="photo__info">
                    <div class="photo__icons">
                        <span class="photo__icon">
                            <i class="far fa-heart fa-lg"></i>
                        </span>
                        <span class="photo__icon">
                            <i class="far fa-comment fa-lg"></i>
                        </span>
                    </div>
                    <span class="photo__likes">{{ story.like.length }} likes</span>
                    <ul class="photo__comments">
                        <li class="photo__comment">
                            <span class="photo__comment-author">{{ story.user.username }}</span>{{ story.caption }}
                        </li>
                        <li class="photo__comment" v-for="komentar in comment" :key="komentar.id">
                            <span class="photo__comment-author">{{ komentar.user.username }}</span>{{ komentar.caption }}!
                        </li>
                    </ul>
                    <span class="photo__time-ago">11 hours ago</span>
                    <div class="photo__add-comment-container">
                        <textarea placeholder="Add a comment..." class="photo__add-comment"></textarea>
                        <i class="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </section>
        </main>
  </div>
</template>

<script>
import MyNavigation from "@@/components/Navigation"

export default {
    components: { MyNavigation },
    computed: {
        postId(){
          return this.$route.params.id
        },
        cookies(){
            return this.$cookies.get('nuxt_session')
        }
    },
    data(){
        return {
            story: {
                like: 0,
                user: {},
                comment: []
            }
        }
    },
    mounted(){
        this.getDetail();
    },
    methods: {
         async getDetail(){
           try{
               const timeline = await this.$axios.post('/story-detail', { user_id: this.cookies.id, post_id: this.postId })
               this.story = timeline.data.data;
           }catch(err){
               alert(err);
           }
           
       }
    }
}
</script>