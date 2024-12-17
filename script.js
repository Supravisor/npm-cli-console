<script>
  function cut() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // empty the textarea
      copyText.value = "";
  }
</script>
