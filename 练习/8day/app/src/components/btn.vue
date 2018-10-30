<template>
    <div id="app">
        <div
            class="swicher"
            @click="toggle"
            :class="{
                on: iValue,
                'lg':size === 'lg',
                'sm':size === 'sm'
            }"
            >
            <div class="btn"></div>
        </div>
    </div>
</template>

<script>
    export default {
            props:{
                value:Boolean,
                size:String
            },
            watch: {
                value(val) {
                    this.iValue = val
                },
                iValue(val) {
                    this.$emit('change', val)
                }
            },
            data() {
                return {
                    iValue: this.value,
                    
                }
            },
            methods: {
                toggle() {
                    this.iValue = !this.iValue
                }
            }
        }

    
</script>

<style>
    .swicher{
            width: 44px;
            height: 20px;
            background: #ccc;
            border-radius: 11px;
            cursor: pointer;
            display: inline-block;
            padding: 1px;
            transition: background 0.6s linear;
        }

        .swicher.on {
            background: orangered;
        }
        .swicher .btn {
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background: #fff;
            transition: transform 0.5s linear;
        }

        .swicher.on .btn {
            width: 20px;
            height: 20px;
            transform: translateX(24px);
            border-radius: 11px;
        }
        .swicher.lg{
            width: 100%; 
        }
        .swicher.lg.on .btn {
            transform: translateX(1200px);
            border-radius: 11px;
        }
        .swicher.sm{
            width: 30px; 
            
        }
        .swicher.sm.on .btn {
            width: 20px;
            height: 20px;
            transform: translateX(11px);
            border-radius: 11px;
        }
</style>