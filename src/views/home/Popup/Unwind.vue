<template>
  <van-popup class="derify-popup" v-model="showPopup" round :closeable="false" @close="close">
    <div class="unwind-popup system-popup">
      <div class="system-popup-title">平仓</div>
      <div style="margin-top: 2rem">
          <div class="system-popup-price">
            <div class="fc-45">开仓量</div>
            <div>
              <span class="fc-85">89293.22</span>
              <span class="fc-45">ETH</span>
            </div>
          </div>
          <div class="system-popup-price">
            <div class="fc-45">开仓价格</div>
            <div>
              <span class="fc-85">2302.22</span>
              <span class="fc-45">USDT</span>
            </div>
          </div>
          <div class="system-popup-price">
            <div class="fc-45">当前价格</div>
            <div>
              <span class="fc-green">1920.22</span>
              <span class="fc-45">USDT</span>
            </div>
          </div>
      </div>
      <div class="system-popup-input-block">
        <div class="system-popup-input-title">平仓量</div>
        <div class="system-popup-input">
          <van-field class="derify-input no-padding-hor" placeholder="0.00" type="number" v-model="value1" />
          <div class="unit">ETH</div>
        </div>
        <div class="unwind-popup-set">
          <div class="unwind-popup-set-item" :class="curPercent === percent.value ? 'active' : ''" @click="curPercent = percent.value" v-for="percent in percents" :key="percent.value">{{percent.name}}</div>
        </div>
      </div>
      <div class="system-popup-buttons">
        <div class="system-popup-button cancel" @click="close">取消</div>
        <div class="system-popup-button confirm" @click="close">确认</div>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showPopup: this.show,
      value1: null,
      percents: [
        { name: '25%', value: 25 },
        { name: '50%', value: 50 },
        { name: '75%', value: 75 },
        { name: '100%', value: 100 }
      ],
      curPercent: 25
    }
  },
  watch: {
    show () {
      this.showPopup = this.show
    }
  },
  methods: {
    close () {
      this.$emit('closeUnwindPopup', false)
    }
  }
}
</script>

<style lang="less" scoped>
.unwind-popup-set {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  &-item {
    flex: .25;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.10);
    border-radius: 2.8rem;
    color: rgba(255, 255, 255, 0.85);
    &.active {
      background: @orange;
      color: #140B32;
    }
  }
  &-item + &-item {
    margin-left: .8rem;
  }
}
</style>
