<template>
  <van-popup class="derify-popup" v-model="showPopup" round :closeable="false" @close="close">
    <div class="set-popup system-popup">
      <div class="system-popup-title">设置止盈止损</div>
      <div style="margin-top: 2rem">
        <div class="system-popup-price">
          <div class="fc-45">开仓价格</div>
          <div>
            <span class="fc-85">89293.22</span>
            <span class="fc-45">USDT</span>
          </div>
        </div>
        <div class="system-popup-price">
          <div class="fc-45">当前价格</div>
          <div>
            <span class="fc-green">89293.22</span>
            <span class="fc-45">USDT</span>
          </div>
        </div>
      </div>
      <div class="system-popup-input-block">
        <div class="system-popup-input-title">止盈设置</div>
        <div class="system-popup-input">
          <van-field class="derify-input no-padding-hor" placeholder="0.00" type="number" v-model="value1" />
          <div class="unit">USDT</div>
        </div>
        <div class="system-popup-input-hint">当指数价格达到 <span class="fc-85">23921.00</span> USDT时，将会触发市价平仓当前仓位，预计盈利 <span class="fc-green">89.10</span> USDT</div>
      </div>
      <div class="system-popup-input-block">
        <div class="system-popup-input-title">止损设置</div>
        <div class="system-popup-input">
          <van-field class="derify-input no-padding-hor" placeholder="0.00" type="number" v-model="value2" />
          <div class="unit">USDT</div>
        </div>
        <div class="system-popup-input-hint">当指数价格达到 - USDT时，将会触发市价平仓当前仓位，预计亏损 - USDT</div>
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
      value2: null
    }
  },
  watch: {
    show () {
      this.showPopup = this.show
    }
  },
  methods: {
    close () {
      this.$emit('closeSetPopup', false)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
