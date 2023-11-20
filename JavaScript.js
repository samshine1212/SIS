<!-- ... (your existing HTML code) ... -->

<script>
    function copyToClipboard() {
        // Select the text area
        var copyText = document.getElementById("textArea");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text
        document.execCommand('copy');

        // Deselect the text area
        copyText.setSelectionRange(0, 0);

        // Alert or any other user feedback
        alert("Text copied to clipboard: " + copyText.value);
    }
</script>

</body>
</html>
