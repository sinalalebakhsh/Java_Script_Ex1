
    // <input type="button" value="Click Here!" onclick="ShowDate()" />
    // <br>
    // <br>
    // <button onclick="this.innerHTML=Date()">Show Date here </button>
    // <br>
    // <br>
    // <input type="text" onchange='ChangeInput(this.value)'/>

<script>

    function ShowDate(){
        document.getElementById('lbl').innerHTML=Date();
    }

    function ChangeInput(value){
        document.getElementById('lbl').innerHTML=value;
    }

</script>