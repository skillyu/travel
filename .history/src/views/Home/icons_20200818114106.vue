<template>
    <div class="icons">
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
            </div>
            <p>必游榜单</p>
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png" alt="">
            </div>
            <p>自然风光</p> 
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="">
            </div>
            <p>名胜古迹</p>
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png" alt="">
            </div>
            <p>踏青赏花</p>
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png" alt="">
            </div>
            <p>太极洞</p>
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b6e35d0668c434f6db6d7de07af3a307.png" alt="">
            </div>
            <p>敬亭山</p>
  
        </div>
        <div class="icon">
            <div class="icon_img">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p>桃花潭</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Icon'
}
</script>

<style>
    .icons{
        display: flex;
        width: 100%;
        height: 300px;
        background: chocolate;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    .icon{
        flex: 0 0 25%;
    }
    .icon img{
        width: 55px;
        height: 55px;
    }
</style>