<template>
    <div>
        <nav class="navigation">
            <nuxt-link to="/">
                <img 
                    src="images/navLogo.png"
                    alt="logo"
                    title="logo"
                    class="navigation__logo"
                />
            </nuxt-link>
           
            <div class="navigation__icons">
                <nuxt-link to="/add-story">
                    <a class="navigation__link">
                        <i class="fa fa-plus"></i>
                    </a>
                </nuxt-link>
                <nuxt-link to="/profile">
                    <a class="navigation__link">
                        <i class="fa fa-user"></i>
                    </a>
                </nuxt-link>
            </div>
        </nav>
    </div>
</template>