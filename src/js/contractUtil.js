/**
 *
 * @param abi
 * @param address
 * @param option {
 *     from: '',
 *     gasPrice: '20000000000'
 * }
 * @constructor
 */
function Contract (abi, address, option) {
  const web3 = new Web3()
  const provider = window.ethereum
  web3.setProvider(provider)

  this.web3 = web3
  this.contract = new web3.eth.Contract(abi, address, Object.assign({ gasPrice: '20000000000' }, option))
}

Contract.prototype = {
  /**
     * ��ֵ���
     * @param amount
     * @return
     */
  deposit: function (amount) {
    return this.contract.methods.deposit(amount).send()
  },
  /**
     * ����
     * @param amount
     * @returns {*}
     */
  withdraw: function (amount) {
    return this.contract.methods.withdraw(amount).send()
  },
  /**
     * ����
     * @param token ��ǰ��Լ���ֵ�ַ
     * @param trader �û��˻���ַ
     * @param side LONG-���࣬SHORT-���գ�HEDGE-�Գ�
     * @param openType MarketOrder-�м�ί�У�LimitOrder-�޼�ί��
     * @param size �������������ּƼۣ�
     * @param price ���ּۣ�����Ϊ8λ��
     * @param leverage �ܸˣ�����Ϊ8λ��
     * @param estimateGasFee
     * @return {*}
     */
  openPosition: function (token, trader, side, openType, size, price, leverage, estimateGasFee) {
    return this.contract.methods.openPosition(token, side, openType, size, price, leverage)
      .send()
  },

  /**
     * ����ֹӯֹ��ί��
     * @param token
     * @param trader
     * @param side
     * @param stopType
     * @param stopPrice
     * @return {*}
     */
  orderStopPosition: function (token, side, stopType, stopPrice) {
    return this.contract.methods.orderStopPosition(token, side, stopType, stopPrice)
      .send()
  },
  /**
     * ƽ��
     * @param trader �û��˻���ַ
     * @param token ��ǰ��Լ���ֵ�ַ
     * @param side LONG-���࣬SHORT-���գ�HEDGE-�Գ�
     * @param size ����
     * @return {*}
     */
  closePosition: function (token, side, size) {
    return this.contract.methods.closePosition(token, side, size)
      .send()
  },
  /**
     * һ��ƽ��
     * @param trader ƽ���˻�
     */
  closeAllPositions: function (trader) {
    return this.contract.methods.closeAllPositions(trader)
      .send()
  },
  /**
     * ��ȡ�˻���Ϣ
     * @param trader
     * @return {*}
     */
  getTraderAccount: function (trader) {
    return this.contract.methods.getTraderAccount(trader).call()
  },
  /**
     * ���ñ��ֵĵ�ǰ�۸�
     * @param marketIdAddress  �Һ�Լ��ַ
     * @param price
     * @return {*}
     */
  setSpotPrice: function (marketIdAddress, price) {
    return this.contract.methods.setSpotPrice(marketIdAddress, price).send()
  },

  /**
     * ��ȡ���ֵ�ǰ�۸�
     * @param marketIdAddress �Һ�Լ��ַ
     * @return {*}
     */
  getSpotPrice: function (marketIdAddress) {
    return this.contract.methods.getSpotPrice(marketIdAddress).call()
  },

  /**
     * ȡ��ί��
     * @param marketIdAddress
     * @param orderType
     * @param side
     * @param timestamp
     * @return {*}
     */
  cancleOrderedPosition: function (marketIdAddress, orderType, side, timestamp) {
    return this.contract.methods.cancleOrderedPosition(marketIdAddress, orderType, side, timestamp).send()
  },
  /**
     * ȡ��ȫ��ί��
     * @param marketIdAddress
     * @return {*}
     */
  cancleAllOrderedPositions: function (marketIdAddress) {
    return this.contract.methods.cancleAllOrderedPositions(marketIdAddress).send()
  },
  /**
     * ��ȡ�û���󿪲���
     * @param marketIdAddress
     * @param trader
     * @param openType
     * @param price
     * @param leverage
     * @return {*}
     */
  getTraderOpenUpperBound: function (marketIdAddress, trader, openType, price, leverage) {
    return this.contract.methods.getTraderOpenUpperBound(marketIdAddress, trader, openType, price, leverage).call()
  },

  /**
     *
     * @param trader
     * @param marketIdAddress
     * @param side
     * @return position
                 size: �ֲ���������Ϊ8λ��
                 leverage: �ܸˣ�����Ϊ8λ��
                 averagePrice: ���־��ۣ�����Ϊ8λ��
                 timestamp: ʱ���
     */
  getTraderPosition: function (trader, marketIdAddress, side) {
    return this.contract.methods.getTraderPosition(trader, marketIdAddress, side).call()
  },

  getTraderOrderStopPosition: function (trader, marketIdAddress, side, stopType) {

  }
}
