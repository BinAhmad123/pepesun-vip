function copyCA() {
    var copyText = document.getElementById("ca_clipboard");
    var tooltip = document.getElementById("copy_tooltip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    tooltip.style.opacity = "inherit";
    navigator.clipboard.writeText(copyText.value);
    setTimeout(() => {
      tooltip.style.opacity = "0";
    }, 2000);
  }
  