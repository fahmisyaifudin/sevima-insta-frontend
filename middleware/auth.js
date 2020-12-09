export default function ({ redirect, app}) {
    if (!app.$cookies.get('nuxt_session')) {
      return redirect('/login')
    }
}