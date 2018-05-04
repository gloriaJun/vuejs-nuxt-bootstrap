<script>
export default {
  fetch ({route, redirect}) {
    return redirect(`/${route.params.lang}/ondemand/analysis`)
  }
}
</script>
