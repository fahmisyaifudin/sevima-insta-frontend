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
                            <i @click="actionLike(story.id)" :class="story.isLiked ? 'fas' : 'far'" class="fa-heart fa-lg"></i>
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
                        <li class="photo__comment" v-for="komentar in story.comment" :key="komentar.id">
                            <span class="photo__comment-author">{{ komentar.user.username }}</span>{{ komentar.caption }}
                        </li>
                    </ul>
                    <span class="photo__time-ago">{{ getTimeFromNow(story.created_at) }}</span>
                    <div class="photo__add-comment-container">
                        <textarea v-model="input.comment" placeholder="Add a comment..." class="photo__add-comment"></textarea>
                        <i @click="actionComment(story.id, index)" class="fas fa-paper-plane"></i>
                    </div>
                </div>
            </section>
        </main>
  </div>
</template>

<script>
import MyNavigation from "@@/components/Navigation"
const moment = require('moment')

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
            },
            input: {
                comment: null
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
           
       },
        async actionLike(id){
           if (!this.story.isLiked) {
                const timeline = await this.$axios.post('/like', { post_id: id, user_id: this.cookies.id, status: true });
                this.story.like.push({ post_id: id, user_id: this.cookies.id });
                this.story.isLiked = true;   
           }else{
               const timeline = await this.$axios.post('/like', { post_id: id, user_id: this.cookies.id, status: false });
                this.story.like.pop();
                this.story.isLiked = false;  
           }
       },
       async actionComment(id, index){
           const response = await this.$axios.post('/comment', { post_id: id, user_id: this.cookies.id, caption: this.input.comment });
           this.story.comment.push({ 
               post_id: id, 
               user_id: this.cookies.id, 
               caption: this.input.comment,
               created_at: moment().format("YYYY-MM-DD HH:mm:ss"), 
               user: {
                   id: this.cookies.id,
                   username: this.cookies.username
               } 
            })
            this.input.comment = null;
       },
        getTimeFromNow(date){
           return moment(date).fromNow();
       },
    }
}
</script>