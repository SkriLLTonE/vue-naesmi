<template>
    <div class="error">
       <p> not found</p>
        <p class="error_404">
            <i class="fas fa-exclamation-circle" style="font-size: 60px; color: red" ></i>
            404
            <i class="fas fa-exclamation-circle" style="font-size: 60px; color: red" ></i>
        </p>
    </div>
</template>
<script>
    export default {
        name: "NotFound"

    }
</script>

<style scoped>
    .error{
        padding: 200px;
        font-size: 60px;
        text-transform: uppercase;
    }
    .error_404{
        font-size: 120px;
    }
    .span{
        transform: rotate(90deg);
    }
</style>