<script>
    var lbl = document.getElementById("lblResult")
    function Sum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    lbl.innerHTML = sum;
}

</script>