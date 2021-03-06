<template>
    <div class="error">
       <p> not found</p>
        <p class="error_404">
            <i class="fas fa-exclamation-circle icon" ></i>
            404
            <i class="fas fa-exclamation-circle icon" ></i>
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
    .icon{
        font-size: 60px; color: red
    }
    @media screen and (max-width: 991px) {
        .error {
            padding: 190px;
        }
    }

        @media screen and (max-width: 768px){
            .error{
                padding: 94px;
            }

    }
    @media screen and (max-width: 576px){
        .error{
            padding: 100px 0;
            font-size: 30px;
        }
        .error_404{
            font-size: 40px;
        }
        .icon{
            font-size: 35px;
        }
    }
</style>