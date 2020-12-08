<template>
    <div>
        <MyNavigation />
        <main class="profile-container">
            <section class="profile">
                <header class="profile__header">
                    <div class="profile__avatar-container">
                        <img 
                            src="images/avatar.jpg"
                            class="profile__avatar"
                        />
                    </div>
                    <div class="profile__info">
                        <div class="profile__name">
                            <h1 class="profile__title">serranoarevalo</h1>
                            <a href="edit-profile.html" class="profile__button u-fat-text">Logout</a>
                        </div>
                       
                        <div class="profile__bio">
                            <span class="profile__full-name u-fat-text">Name : Nicolás Serrano Arévalo</span>
                           
                        </div>
                    </div>
                </header>
                <div class="profile__pictures">
                    <nuxt-link to="/detail">
                        <a class="profile-picture">
                            <img
                                src="images/feedPhoto.jpg"
                                class="profile-picture__picture"
                            />
                            <div class="profile-picture__overlay">
                                <span class="profile-picture__number">
                                    <i class="fa fa-heart"></i> 450
                                </span>
                                <span class="profile-picture__number">
                                    <i class="fa fa-comment"></i> 39
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
}
</script>