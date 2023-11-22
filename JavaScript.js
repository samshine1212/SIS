<!-- ... (your existing HTML code) ... -->

<script>
    function copyToClipboard() {
        var copyText = document.getElementById("textArea");
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        try {
            document.execCommand('copy');
            alert("Text copied to clipboard: " + copyText.value);
        } catch (err) {
            alert("Unable to copy text to clipboard. Please try again manually.");
        }

        copyText.setSelectionRange(0, 0);
    }

    function copyText(index, text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand("copy");
            alert("Enjoy your movie! " + index);
        } catch (err) {
            alert("Unable to copy text to clipboard. Please try again manually.");
        }

        document.body.removeChild(textArea);
    }
</script>

<!-- ... (your remaining HTML code) ... -->
    
