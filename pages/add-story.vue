<template>
    <div>
        <MyNavigation />
         <main class="edit-profile">
            <section class="profile-form">
                <header class="profile-form__header">
                    <div class="profile-form__avatar-container">
                        <img 
                            src="images/avatar.jpg"
                            class="profile-form__avatar"
                        />
                    </div>
                    <h4 class="profile-form__title">serranoarevalo</h4>
                </header>
                <form action="#" class="edit-profile__form">
                    
                   
                    
                    <div class="edit-profile__form-row">
                        <label for="bio" class="edit-profile__label">
                            Bio
                        </label>
                        <textarea id="bio" class="edit-profile__textarea"></textarea>
                    </div>
                    <div class="edit-profile__form-row">
                        <label for="photo" class="edit-profile__label">
                            Photo
                        </label>
                        <textarea id="bio" class="edit-profile__textarea"></textarea>
                    </div>
                    
                    <div class="edit-profile__form-row">
                        <label class="edit-profile__label"></label>
                        <input type="submit" value="Submit">
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
}
</script>