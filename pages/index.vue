<template>
  <div>
        <MyNavigation />
        <main class="feed">
            <section class="photo" v-for="(story, index) in stories" :key="story.id">
                <header class="photo__header">
                    <div class="photo__header-column">
                        <img
                            class="photo__avatar"
                            src="images/avatar.png"
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
                            <i @click="actionLike(story.id, index)" :class="story.isLiked ? 'fas' : 'far'" class="fa-heart fa-lg"></i>
                        </span>
                        <span class="photo__icon">
                            <nuxt-link :to="{ path: 'detail/' + story.id, params: { detail: story }}"><i class="far fa-comment fa-lg"></i></nuxt-link>
                        </span>
                    </div>
                    <span class="photo__likes">{{ story.like.length }} likes</span>
                    <ul class="photo__comments">
                        <li class="photo__comment">
                            <span class="photo__comment-author">{{ story.user.username }}</span>{{ story.caption }}
                        </li>
                    </ul>
                    <span class="photo__time-ago">{{ getTimeFromNow(story.created_at) }}</span>
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
    middleware: 'auth',
    computed: {
        cookies(){
            return this.$cookies.get('nuxt_session')
        }
    },
    data(){
       return {
           stories: [],
       }
   },
   created(){
       this.getTimeline();
   },
   methods: {
       async getTimeline(){
           try{
               const timeline = await this.$axios.post('/timeline', { user_id: this.cookies.id });
               this.stories = timeline.data.data;
           }catch(err){
               alert(err);
           }
           
       },
       getTimeFromNow(date){
           return moment(date).fromNow();
       },
       async actionLike(id, index){
           if (!this.stories[index].isLiked) {
                const timeline = await this.$axios.post('/like', { post_id: id, user_id: this.cookies.id, status: true });
                this.stories[index].like.push({ post_id: id, user_id: this.cookies.id });
                this.stories[index].isLiked = true;   
           }else{
               const timeline = await this.$axios.post('/like', { post_id: id, user_id: this.cookies.id, status: false });
                this.stories[index].like.pop();
                this.stories[index].isLiked = false;  
           }
       }
   }
       
}
</script>