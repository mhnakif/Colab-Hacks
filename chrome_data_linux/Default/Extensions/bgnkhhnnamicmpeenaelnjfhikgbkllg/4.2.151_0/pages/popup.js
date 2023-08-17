(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[787],{

/***/ 59355:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(76644);
// EXTERNAL MODULE: ./Extension/src/common/translators/i18n.ts
var i18n = __webpack_require__(98133);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 14 modules
var mobxreact_esm = __webpack_require__(46047);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(37916);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(5497);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(26813);
// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(53679);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(31056);
// EXTERNAL MODULE: ./node_modules/punycode/punycode.es6.js
var punycode_es6 = __webpack_require__(2860);
// EXTERNAL MODULE: ./Extension/src/common/forward.ts
var forward = __webpack_require__(82637);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/constants.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const IOS_URL = forward/* Forward.get */.OU.get({
  action: forward/* ForwardAction.IOS */.xD.IOS,
  from: forward/* ForwardFrom.Popup */.UU.Popup
});
const ANDROID_URL = forward/* Forward.get */.OU.get({
  action: forward/* ForwardAction.Android */.xD.Android,
  from: forward/* ForwardFrom.Popup */.UU.Popup
});
const COMPARE_URL = forward/* Forward.get */.OU.get({
  action: forward/* ForwardAction.Compare */.xD.Compare,
  from: forward/* ForwardFrom.Popup */.UU.Popup
});
const VIEW_STATES = {
  ACTIONS: 'actions',
  STATS: 'stats'
};
const POPUP_STATES = {
  APPLICATION_ENABLED: 'application.enabled',
  APPLICATION_FILTERING_DISABLED: 'application.filtering.disabled',
  APPLICATION_UNAVAILABLE: 'application.unavailable',
  SITE_IN_EXCEPTION: 'site.in.exception',
  SITE_ALLOWLISTED: 'site.allowlisted'
};
const TIME_RANGES = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year'
};
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(38647);
// EXTERNAL MODULE: ./Extension/src/common/messages/index.ts
var messages = __webpack_require__(23104);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/stores/PopupStore.js



var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */










// Do not allow property change outside of store actions
(0,mobx_esm/* configure */.jQ)({
  enforceActions: 'observed'
});
let PopupStore = (_class = class PopupStore {
  constructor() {
    this.TOTAL_BLOCKED_GROUP_ID = 'total';
    // need for render blocking before first data retrieving
    (0,initializerDefineProperty/* default */.Z)(this, "isInitialDataReceived", _descriptor, this);
    (0,initializerDefineProperty/* default */.Z)(this, "applicationFilteringDisabled", _descriptor2, this);
    (0,initializerDefineProperty/* default */.Z)(this, "applicationAvailable", _descriptor3, this);
    (0,initializerDefineProperty/* default */.Z)(this, "canAddRemoveRule", _descriptor4, this);
    (0,initializerDefineProperty/* default */.Z)(this, "url", _descriptor5, this);
    (0,initializerDefineProperty/* default */.Z)(this, "viewState", _descriptor6, this);
    (0,initializerDefineProperty/* default */.Z)(this, "totalBlocked", _descriptor7, this);
    (0,initializerDefineProperty/* default */.Z)(this, "totalBlockedTab", _descriptor8, this);
    (0,initializerDefineProperty/* default */.Z)(this, "documentAllowlisted", _descriptor9, this);
    (0,initializerDefineProperty/* default */.Z)(this, "userAllowlisted", _descriptor10, this);
    (0,initializerDefineProperty/* default */.Z)(this, "showInfoAboutFullVersion", _descriptor11, this);
    (0,initializerDefineProperty/* default */.Z)(this, "isEdgeBrowser", _descriptor12, this);
    (0,initializerDefineProperty/* default */.Z)(this, "stats", _descriptor13, this);
    (0,initializerDefineProperty/* default */.Z)(this, "selectedTimeRange", _descriptor14, this);
    (0,initializerDefineProperty/* default */.Z)(this, "selectedBlockedType", _descriptor15, this);
    (0,initializerDefineProperty/* default */.Z)(this, "promoNotification", _descriptor16, this);
    (0,initializerDefineProperty/* default */.Z)(this, "hasCustomRulesToReset", _descriptor17, this);
    (0,initializerDefineProperty/* default */.Z)(this, "settings", _descriptor18, this);
    this.currentTabId = null;
    (0,initializerDefineProperty/* default */.Z)(this, "getPopupData", _descriptor19, this);
    (0,initializerDefineProperty/* default */.Z)(this, "changeApplicationFilteringDisabled", _descriptor20, this);
    (0,initializerDefineProperty/* default */.Z)(this, "setViewState", _descriptor21, this);
    (0,initializerDefineProperty/* default */.Z)(this, "toggleAllowlisted", _descriptor22, this);
    (0,initializerDefineProperty/* default */.Z)(this, "getStatisticsData", _descriptor23, this);
    this.getDataByRange = (stats, range) => {
      switch (range) {
        case TIME_RANGES.DAY:
          return stats.lastMonth[stats.lastMonth.length - 1];
        case TIME_RANGES.WEEK:
          {
            const result = {};
            for (let i = 0; i < stats.lastWeek.length; i += 1) {
              const day = stats.lastWeek[i];
              // eslint-disable-next-line no-restricted-syntax
              for (const type of Object.keys(day)) {
                result[type] = (result[type] || 0) + day[type];
              }
            }
            return result;
          }
        case TIME_RANGES.MONTH:
          return stats.lastYear[stats.lastYear.length - 1];
        case TIME_RANGES.YEAR:
          {
            const result = {};
            for (let i = 0; i < stats.lastYear.length; i += 1) {
              const month = stats.lastYear[i];
              // eslint-disable-next-line no-restricted-syntax
              for (const type of Object.keys(month)) {
                result[type] = (result[type] || 0) + month[type];
              }
            }
            return result;
          }
        default:
          throw new Error('There is no such time range type');
      }
    };
    (0,initializerDefineProperty/* default */.Z)(this, "setSelectedBlockedType", _descriptor24, this);
    (0,initializerDefineProperty/* default */.Z)(this, "setSelectedTimeRange", _descriptor25, this);
    (0,initializerDefineProperty/* default */.Z)(this, "closePromoNotification", _descriptor26, this);
    (0,initializerDefineProperty/* default */.Z)(this, "openPromoNotificationUrl", _descriptor27, this);
    (0,initializerDefineProperty/* default */.Z)(this, "updateBlockedStats", _descriptor28, this);
    (0,initializerDefineProperty/* default */.Z)(this, "onSettingUpdated", _descriptor29, this);
    (0,mobx_esm/* makeObservable */.rC)(this);
  }
  get currentSite() {
    if (this.applicationAvailable) {
      return this.domainName ? punycode_es6/* default.toUnicode */.ZP.toUnicode(this.domainName) : this.url;
    }
    return this.url;
  }
  get currentStatusMessage() {
    let messageKey = '';
    if (!this.applicationAvailable) {
      messageKey = 'popup_site_filtering_state_secure_page';
    } else if (!this.canAddRemoveRule) {
      messageKey = 'popup_site_exception_information';
    } else if (this.applicationFilteringDisabled) {
      messageKey = 'popup_site_filtering_state_paused';
    } else if (this.documentAllowlisted) {
      messageKey = 'popup_site_filtering_state_disabled';
    } else {
      messageKey = 'popup_site_filtering_state_enabled';
    }
    if (messageKey) {
      return reactTranslator/* reactTranslator.getMessage */._.getMessage(messageKey);
    }
    return null;
  }
  get popupState() {
    if (this.applicationFilteringDisabled) {
      return POPUP_STATES.APPLICATION_FILTERING_DISABLED;
    }
    if (!this.applicationAvailable) {
      return POPUP_STATES.APPLICATION_UNAVAILABLE;
    }
    if (!this.canAddRemoveRule) {
      return POPUP_STATES.SITE_IN_EXCEPTION;
    }
    if (this.documentAllowlisted) {
      return POPUP_STATES.SITE_ALLOWLISTED;
    }
    return POPUP_STATES.APPLICATION_ENABLED;
  }
  get statsDataByType() {
    const {
      stats
    } = this;
    if (!stats) {
      return null;
    }
    const statsDataForCurrentRange = this.getDataByRange(stats, this.selectedTimeRange);
    const {
      blockedGroups
    } = stats;
    return blockedGroups.slice().sort((groupA, groupB) => groupA.displayNumber - groupB.displayNumber).map(group => {
      const {
        groupId,
        groupName
      } = group;
      const blocked = statsDataForCurrentRange[group.groupId];
      return {
        groupId,
        blocked,
        groupName
      };
    }).filter(group => group.blocked > 0 || group.groupId === this.TOTAL_BLOCKED_GROUP_ID);
  }
  get appearanceTheme() {
    if (!this.settings) {
      return null;
    }
    return this.settings.values[this.settings.names.AppearanceTheme];
  }
}, (_descriptor = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isInitialDataReceived", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "applicationFilteringDisabled", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "applicationAvailable", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor4 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "canAddRemoveRule", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor5 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "url", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "viewState", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return VIEW_STATES.ACTIONS;
  }
}), _descriptor7 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "totalBlocked", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor8 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "totalBlockedTab", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor9 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "documentAllowlisted", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor10 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "userAllowlisted", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor11 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "showInfoAboutFullVersion", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor12 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "isEdgeBrowser", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor13 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "stats", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor14 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "selectedTimeRange", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return TIME_RANGES.WEEK;
  }
}), _descriptor15 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "selectedBlockedType", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return this.TOTAL_BLOCKED_GROUP_ID;
  }
}), _descriptor16 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "promoNotification", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor17 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "hasCustomRulesToReset", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor18 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "settings", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor19 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "getPopupData", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      // get current tab id
      const tabs = await browser_polyfill_default().tabs.query({
        active: true,
        currentWindow: true
      });
      const currentTab = tabs === null || tabs === void 0 ? void 0 : tabs[0];
      const response = await messenger/* messenger.getTabInfoForPopup */.d.getTabInfoForPopup(currentTab === null || currentTab === void 0 ? void 0 : currentTab.id);
      if (!response) {
        return;
      }
      (0,mobx_esm/* runInAction */.z)(() => {
        const {
          frameInfo,
          options,
          stats,
          settings
        } = response;

        // frame info
        this.applicationFilteringDisabled = frameInfo.applicationFilteringDisabled;
        this.applicationAvailable = frameInfo.applicationAvailable;
        this.url = frameInfo.url;
        this.totalBlocked = frameInfo.totalBlocked;
        this.totalBlockedTab = frameInfo.totalBlockedTab;
        this.domainName = frameInfo.domainName;
        this.documentAllowlisted = frameInfo.documentAllowlisted;
        this.userAllowlisted = frameInfo.userAllowlisted;
        this.canAddRemoveRule = frameInfo.canAddRemoveRule;

        // options
        this.showInfoAboutFullVersion = options.showInfoAboutFullVersion;
        this.isEdgeBrowser = options.isEdgeBrowser;
        this.promoNotification = options.notification;
        this.hasCustomRulesToReset = options.hasCustomRulesToReset;

        // stats
        this.stats = stats;

        // settings
        this.settings = settings;
        this.isInitialDataReceived = true;
        this.currentTabId = currentTab === null || currentTab === void 0 ? void 0 : currentTab.id;
      });
    };
  }
}), _descriptor20 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "changeApplicationFilteringDisabled", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async state => {
      await messenger/* messenger.changeApplicationFilteringDisabled */.d.changeApplicationFilteringDisabled(state);
      (0,mobx_esm/* runInAction */.z)(() => {
        this.applicationFilteringDisabled = state;
      });
    };
  }
}), _descriptor21 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setViewState", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.viewState = state;
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "currentSite", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "currentSite"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "currentStatusMessage", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "currentStatusMessage"), _class.prototype), _descriptor22 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "toggleAllowlisted", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      if (!this.applicationAvailable || this.applicationFilteringDisabled) {
        return;
      }
      if (!this.canAddRemoveRule) {
        return;
      }
      let isAllowlisted = this.documentAllowlisted;
      if (isAllowlisted) {
        messenger/* messenger.removeAllowlistDomain */.d.removeAllowlistDomain(this.currentTabId, true);
        isAllowlisted = false;
      } else {
        messenger/* messenger.addAllowlistDomain */.d.addAllowlistDomain(this.currentTabId);
        isAllowlisted = true;
      }
      (0,mobx_esm/* runInAction */.z)(() => {
        this.documentAllowlisted = isAllowlisted;
        this.userAllowlisted = isAllowlisted;
        this.totalBlockedTab = 0;
      });
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "popupState", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "popupState"), _class.prototype), _descriptor23 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "getStatisticsData", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      const {
        stats
      } = await messenger/* messenger.getStatisticsData */.d.getStatisticsData();
      (0,mobx_esm/* runInAction */.z)(() => {
        this.stats = stats;
      });
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "statsDataByType", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "statsDataByType"), _class.prototype), _descriptor24 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setSelectedBlockedType", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return value => {
      this.selectedBlockedType = value;
    };
  }
}), _descriptor25 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "setSelectedTimeRange", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return value => {
      this.selectedTimeRange = value;
    };
  }
}), _descriptor26 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "closePromoNotification", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      this.promoNotification = null;
      await messenger/* messenger.sendMessage */.d.sendMessage(messages/* MessageType.SetNotificationViewed */.Cs.SetNotificationViewed, {
        withDelay: false
      });
    };
  }
}), _descriptor27 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "openPromoNotificationUrl", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async () => {
      let {
        url
      } = this.promoNotification;
      url = `${url}&from=popup`;
      (0,mobx_esm/* runInAction */.z)(() => {
        this.promoNotification = null;
      });
      // TODO: This message will mark the notification as viewed,
      // but it seems that we need to show it.
      await messenger/* messenger.sendMessage */.d.sendMessage(messages/* MessageType.SetNotificationViewed */.Cs.SetNotificationViewed, {
        withDelay: false
      });
      await browser_polyfill_default().tabs.create({
        url
      });
    };
  }
}), _descriptor28 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "updateBlockedStats", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return tabInfo => {
      this.totalBlocked = tabInfo.totalBlocked;
      this.totalBlockedTab = tabInfo.totalBlockedTab;
    };
  }
}), _descriptor29 = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "onSettingUpdated", [mobx_esm/* action */.aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (name, value) => {
      if (!this.settings) {
        return;
      }
      this.settings.values[name] = value;
    };
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "appearanceTheme", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "appearanceTheme"), _class.prototype)), _class);
const popupStore = /*#__PURE__*/(0,react.createContext)(new PopupStore());
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(87235);
;// CONCATENATED MODULE: ./Extension/src/common/common-script.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Sleeps given period of milliseconds
 *
 * @param ms - milliseconds
 */
async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Sleeps necessary period of time if minimum duration didn't pass since entry time
 *
 * @param entryTimeMs
 * @param minDurationMs
 */
async function sleepIfNecessary(entryTimeMs, minDurationMs) {
  if (Date.now() - entryTimeMs < minDurationMs) {
    await sleep(minDurationMs - (Date.now() - entryTimeMs));
  }
}

/**
 * Executes async function with at least required time
 *
 * @param fn - function to execute
 * @param minDurationMs - minimum executing time
 */
// TODO: generic types
function addMinDurationTime(fn, minDurationMs) {
  return async (...args) => {
    const start = Date.now();
    try {
      const response = await fn(...args);
      await sleepIfNecessary(start, minDurationMs);
      return response;
    } catch (e) {
      await sleepIfNecessary(start, minDurationMs);
      throw e;
    }
  };
}
// EXTERNAL MODULE: ./Extension/src/pages/common/constants.js
var constants = __webpack_require__(79735);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(35491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(19532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(48190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(47630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(82563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Actions/actions.pcss
var actions = __webpack_require__(82328);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Actions/actions.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(actions/* default */.Z, options);




       /* harmony default export */ const Actions_actions = (actions/* default */.Z && actions/* default.locals */.Z.locals ? actions/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Actions/Actions.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */












const Actions = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const [removingUserRules, clearingUserRules] = (0,react.useState)(false);
  const removeUserRulesWithMinDuration = addMinDurationTime(messenger/* messenger.resetCustomRulesForPage */.d.resetCustomRulesForPage, constants/* MIN_USER_RULES_REMOVAL_DISPLAY_DURATION_MS */.nD);
  const resetCustomRulesForPage = async () => {
    if (!store.applicationAvailable) {
      return;
    }
    clearingUserRules(true);
    await removeUserRulesWithMinDuration(store.url);
    window.close();
  };
  const handleBlockAds = () => {
    if (!store.applicationAvailable) {
      return;
    }
    messenger/* messenger.openAssistant */.d.openAssistant();
    window.close();
  };
  const handleOpenFilteringLog = () => {
    messenger/* messenger.openFilteringLog */.d.openFilteringLog();
    window.close();
  };
  const handleAbuseSite = () => {
    if (!store.applicationAvailable) {
      return;
    }
    messenger/* messenger.openAbuseSite */.d.openAbuseSite(store.url, forward/* ForwardFrom.Popup */.UU.Popup);
    window.close();
  };
  const handleCheckSiteSecurity = () => {
    if (!store.applicationAvailable) {
      return;
    }
    messenger/* messenger.checkSiteSecurity */.d.checkSiteSecurity(store.url, forward/* ForwardFrom.Popup */.UU.Popup);
    window.close();
  };
  const actionChangingClassname = classnames_default()('action', {
    action_disabled: !store.applicationAvailable
  });
  const removeUserRulesIconId = removingUserRules ? '#removing-user-rules' : '#small-cross';
  return /*#__PURE__*/react.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: actionChangingClassname,
    onClick: handleBlockAds
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#block-ad",
    classname: "icon--action"
  }), /*#__PURE__*/react.createElement("div", {
    className: "action-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_block_site_ads_option'))), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "action",
    onClick: handleOpenFilteringLog
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#sandwich",
    classname: "icon--action"
  }), /*#__PURE__*/react.createElement("div", {
    className: "action-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_open_filtering_log'))), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: actionChangingClassname,
    onClick: handleAbuseSite
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#thumb-down",
    classname: "icon--action"
  }), /*#__PURE__*/react.createElement("div", {
    className: "action-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_abuse_site'))), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: actionChangingClassname,
    onClick: handleCheckSiteSecurity
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#shield",
    classname: "icon--action"
  }), /*#__PURE__*/react.createElement("div", {
    className: "action-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_security_report'))), store.hasCustomRulesToReset && /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: actionChangingClassname,
    onClick: resetCustomRulesForPage,
    disabled: removingUserRules
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: removeUserRulesIconId,
    classname: "icon--action",
    animationCondition: removingUserRules,
    animationClassname: "icon--loading"
  }), /*#__PURE__*/react.createElement("div", {
    className: "action-title",
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_reset_custom_rules')
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_reset_custom_rules'))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Actions/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Stats/StatsTable/stats-table.pcss
var stats_table = __webpack_require__(66680);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsTable/stats-table.pcss

      
      
      
      
      
      
      
      
      

var stats_table_options = {};

stats_table_options.styleTagTransform = (styleTagTransform_default());
stats_table_options.setAttributes = (setAttributesWithoutAttributes_default());

      stats_table_options.insert = insertBySelector_default().bind(null, "head");
    
stats_table_options.domAPI = (styleDomAPI_default());
stats_table_options.insertStyleElement = (insertStyleElement_default());

var stats_table_update = injectStylesIntoStyleTag_default()(stats_table/* default */.Z, stats_table_options);




       /* harmony default export */ const StatsTable_stats_table = (stats_table/* default */.Z && stats_table/* default.locals */.Z.locals ? stats_table/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsTable/StatsTable.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */




const StatsTable = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const {
    statsDataByType
  } = store;
  if (!statsDataByType) {
    return null;
  }
  const statsDataByTypeWithoutTotal = statsDataByType.filter(group => group.groupId !== store.TOTAL_BLOCKED_GROUP_ID);
  if (statsDataByTypeWithoutTotal.length === 0) {
    return null;
  }
  const renderStatsByType = statsDataByTypeWithoutTotal.map(stats => {
    return /*#__PURE__*/react.createElement("li", {
      className: "stats__item",
      key: stats.groupId
    }, /*#__PURE__*/react.createElement("span", {
      className: "stats__name"
    }, stats.groupName), /*#__PURE__*/react.createElement("span", {
      className: "stats__value"
    }, new Intl.NumberFormat().format(stats.blocked)));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "stats__list"
  }, renderStatsByType));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsTable/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Tabs/Tab.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



const Tab = ({
  title,
  active,
  onClick
}) => {
  const tabClass = classnames_default()('tabs__tab', {
    tabs__tab_active: active
  });
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: tabClass,
    onClick: onClick
  }, title);
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Tabs/tabs.pcss
var tabs = __webpack_require__(95255);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Tabs/tabs.pcss

      
      
      
      
      
      
      
      
      

var tabs_options = {};

tabs_options.styleTagTransform = (styleTagTransform_default());
tabs_options.setAttributes = (setAttributesWithoutAttributes_default());

      tabs_options.insert = insertBySelector_default().bind(null, "head");
    
tabs_options.domAPI = (styleDomAPI_default());
tabs_options.insertStyleElement = (insertStyleElement_default());

var tabs_update = injectStylesIntoStyleTag_default()(tabs/* default */.Z, tabs_options);




       /* harmony default export */ const Tabs_tabs = (tabs/* default */.Z && tabs/* default.locals */.Z.locals ? tabs/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Tabs/Tabs.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */










const Tabs = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const contentMap = {
    [VIEW_STATES.ACTIONS]: Actions,
    [VIEW_STATES.STATS]: StatsTable
  };
  const TabContent = contentMap[store.viewState];
  const handleTabClick = viewState => () => {
    store.setViewState(viewState);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/react.createElement("div", {
    className: "tabs__panel"
  }, /*#__PURE__*/react.createElement(Tab, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_tab_actions'),
    active: store.viewState === VIEW_STATES.ACTIONS,
    onClick: handleTabClick(VIEW_STATES.ACTIONS)
  }), /*#__PURE__*/react.createElement(Tab, {
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_tab_statistics'),
    active: store.viewState === VIEW_STATES.STATS,
    onClick: handleTabClick(VIEW_STATES.STATS)
  })), /*#__PURE__*/react.createElement("div", {
    className: "tabs__content",
    tabIndex: TabContent === contentMap[VIEW_STATES.STATS] ? 0 : -1
  }, /*#__PURE__*/react.createElement(TabContent, null)));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Tabs/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Header/header.pcss
var header = __webpack_require__(69091);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Header/header.pcss

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());

      header_options.insert = insertBySelector_default().bind(null, "head");
    
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.Z, header_options);




       /* harmony default export */ const Header_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Header/Header.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */











const Header = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const [filtersUpdating, setFiltersUpdating] = (0,react.useState)(false);
  const {
    applicationFilteringDisabled
  } = store;
  const updateFiltersWithMinDuration = addMinDurationTime(messenger/* messenger.updateFilters */.d.updateFilters, constants/* MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS */.dR);
  const refUpdatingBtn = (0,react.useRef)(null);
  const handleUpdateFiltersClick = async () => {
    refUpdatingBtn.current.blur();
    setFiltersUpdating(true);
    await updateFiltersWithMinDuration();
    setFiltersUpdating(false);
  };
  const handleEnableClick = async () => {
    await store.changeApplicationFilteringDisabled(false);
  };
  const handlePauseClick = async () => {
    await store.changeApplicationFilteringDisabled(true);
  };
  const handleSettingsClick = e => {
    e.preventDefault();
    messenger/* messenger.openSettingsTab */.d.openSettingsTab();
    window.close();
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "popup-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "popup-header__logo"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#logo",
    classname: "icon--logo"
  })), /*#__PURE__*/react.createElement("div", {
    className: "popup-header__buttons"
  }, /*#__PURE__*/react.createElement("button", {
    className: classnames_default()('button', 'popup-header__button'),
    ref: refUpdatingBtn,
    disabled: filtersUpdating,
    type: "button",
    onClick: handleUpdateFiltersClick,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_header_update_filters')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#update-filters",
    classname: "icon--update-filters",
    animationCondition: filtersUpdating,
    animationClassname: "icon--loading"
  })), !applicationFilteringDisabled && /*#__PURE__*/react.createElement("button", {
    className: "button popup-header__button",
    type: "button",
    onClick: handlePauseClick,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('context_disable_protection')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#pause",
    classname: "icon--pause"
  })), applicationFilteringDisabled && /*#__PURE__*/react.createElement("button", {
    className: "button popup-header__button",
    type: "button",
    onClick: handleEnableClick,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('context_enable_protection')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#start",
    classname: "icon--button icon--start"
  })), /*#__PURE__*/react.createElement("button", {
    className: "button popup-header__button",
    type: "button",
    onClick: handleSettingsClick,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_settings')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#settings",
    classname: "icon--settings"
  }))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Header/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Footer/footer.pcss
var footer = __webpack_require__(9066);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Footer/footer.pcss

      
      
      
      
      
      
      
      
      

var footer_options = {};

footer_options.styleTagTransform = (styleTagTransform_default());
footer_options.setAttributes = (setAttributesWithoutAttributes_default());

      footer_options.insert = insertBySelector_default().bind(null, "head");
    
footer_options.domAPI = (styleDomAPI_default());
footer_options.insertStyleElement = (insertStyleElement_default());

var footer_update = injectStylesIntoStyleTag_default()(footer/* default */.Z, footer_options);




       /* harmony default export */ const Footer_footer = (footer/* default */.Z && footer/* default.locals */.Z.locals ? footer/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Footer/Footer.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */








const Footer = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  let footerContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "footer__text"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_adguard_footer_title')), /*#__PURE__*/react.createElement("div", {
    className: "footer__platforms"
  }, /*#__PURE__*/react.createElement("a", {
    href: IOS_URL,
    target: "_blank",
    rel: "noreferrer",
    className: "footer__link",
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_adguard_for_ios')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#apple",
    classname: "footer__icon"
  })), /*#__PURE__*/react.createElement("a", {
    href: ANDROID_URL,
    target: "_blank",
    rel: "noreferrer",
    className: "footer__link",
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_adguard_for_android')
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#android",
    classname: "footer__icon"
  }))));
  if (store.isEdgeBrowser) {
    const currentYear = new Date().getFullYear();
    const footerText = `© 2009-${currentYear} AdGuard Software Ltd`;
    footerContent = /*#__PURE__*/react.createElement("div", {
      className: "footer__text"
    }, footerText);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "footer"
  }, footerContent);
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Footer/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/ui/icons.pcss
var icons = __webpack_require__(80493);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/ui/icons.pcss

      
      
      
      
      
      
      
      
      

var icons_options = {};

icons_options.styleTagTransform = (styleTagTransform_default());
icons_options.setAttributes = (setAttributesWithoutAttributes_default());

      icons_options.insert = insertBySelector_default().bind(null, "head");
    
icons_options.domAPI = (styleDomAPI_default());
icons_options.insertStyleElement = (insertStyleElement_default());

var icons_update = injectStylesIntoStyleTag_default()(icons/* default */.Z, icons_options);




       /* harmony default export */ const ui_icons = (icons/* default */.Z && icons/* default.locals */.Z.locals ? icons/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/ui/Icons.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



const Icons = () => {
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "hidden"
  }, /*#__PURE__*/react.createElement("symbol", {
    id: "update-filters",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    id: "Vector 13",
    d: "M6 7.00005C9.6 1.80005 19.5 3.50002 20 12.0001V13.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react.createElement("path", {
    id: "Vector 14",
    d: "M18 16.9999C14.4 22.1999 4.5 20.5 4 11.9999V11",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react.createElement("path", {
    id: "Vector 15",
    d: "M22 12L20 14L18 12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    id: "Vector 16",
    d: "M2 12L4 10L6 12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "pause",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 16L9.5 8L9.5 16Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 16L14.5 8L14.5 16Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "start",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 12L7 20L7 4L19 12Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "settings",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.92921 18.9146C8.06451 18.9146 8.19778 18.9475 8.31752 19.0105C8.74311 19.2345 9.1883 19.4192 9.64753 19.5621C9.91308 19.6446 10.12 19.8541 10.1991 20.1207C10.453 20.9752 10.6939 21.6143 10.852 22H13.148C13.3061 21.6135 13.5475 20.9742 13.8011 20.1199C13.8803 19.8534 14.0872 19.6438 14.3527 19.5613C14.812 19.4184 15.2572 19.2337 15.6827 19.0097C15.9289 18.88 16.2236 18.8818 16.4682 19.0144C17.2521 19.4394 17.8745 19.7207 18.2592 19.8822L19.8832 18.2591C19.7215 17.874 19.4405 17.2513 19.0152 16.4673C18.8826 16.2227 18.8809 15.9281 19.0105 15.6819C19.2346 15.2563 19.4192 14.8111 19.5621 14.3518C19.6446 14.0863 19.8542 13.8794 20.1207 13.8002C20.9752 13.5463 21.6143 13.3054 22 13.1473V10.8514C21.6135 10.6933 20.9744 10.4519 20.12 10.1982C19.8534 10.119 19.6439 9.91214 19.5613 9.64659C19.4184 9.18735 19.2338 8.74215 19.0097 8.31656C18.8801 8.07037 18.8818 7.77571 19.0144 7.53109C19.4394 6.74718 19.7207 6.12475 19.8819 5.74009L18.2597 4.1168C17.8745 4.27827 17.2518 4.55954 16.4679 4.98483C16.2233 5.11742 15.9287 5.11918 15.6825 4.98952C15.2569 4.76548 14.8117 4.58084 14.3525 4.43792C14.0869 4.3554 13.88 4.14586 13.8009 3.87929C13.5472 3.02507 13.3061 2.3857 13.148 2H10.852C10.6958 2.38492 10.4546 3.02064 10.2009 3.86965C10.1242 4.14096 9.91549 4.35507 9.64623 4.4387C9.18701 4.58154 8.74182 4.76609 8.31621 4.99004C8.07003 5.1197 7.77538 5.11794 7.53076 4.98535C6.74686 4.56032 6.12443 4.27905 5.73978 4.11785L4.11678 5.74035C4.27824 6.12553 4.55951 6.74823 4.98479 7.53213C5.11738 7.77675 5.11913 8.07141 4.98948 8.3176C4.76553 8.7432 4.58099 9.1884 4.43815 9.64763C4.35563 9.91318 4.1461 10.1201 3.87952 10.1992C3.02505 10.4529 2.38596 10.6941 2 10.8521V13.1481C2.38387 13.3044 3.01568 13.5442 3.86208 13.7958C4.1443 13.8731 4.36551 14.0924 4.44518 14.374C4.58538 14.8197 4.76482 15.2522 4.98141 15.6663C5.12378 15.9228 5.12082 16.2352 4.97359 16.489C4.55508 17.2627 4.27746 17.8779 4.11756 18.2599L5.74082 19.8842C6.126 19.7228 6.74868 19.4415 7.53258 19.0162C7.65429 18.9499 7.79061 18.915 7.92921 18.9146Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.27271C10.4937 9.27271 9.27271 10.4937 9.27271 12C9.27271 13.5062 10.4937 14.7273 12 14.7273C13.5062 14.7273 14.7273 13.5062 14.7273 12C14.7255 10.4945 13.5055 9.27447 12 9.27271Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "logo",
    viewBox: "0 0 160 35"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M125.471 24.653l-1.217-3.04h-6.06l-1.15 3.04h-4.115l6.57-15.487h3.672l6.503 15.487h-4.203zM121.268 13.3l-1.99 5.316h3.937l-1.947-5.316zM112.31 18.813c0 .933-.159 1.782-.476 2.548a5.538 5.538 0 01-1.36 1.969c-.59.547-1.302.973-2.135 1.28-.833.306-1.758.459-2.776.459-1.032 0-1.961-.153-2.787-.46-.826-.306-1.526-.732-2.101-1.28a5.552 5.552 0 01-1.328-1.968c-.31-.766-.464-1.615-.464-2.549V9.166h3.76v9.34c0 .423.056.824.166 1.203.11.38.28.719.509 1.018.229.299.53.535.907.71.376.176.83.263 1.36.263.531 0 .985-.087 1.36-.262.377-.176.683-.412.919-.711.236-.3.405-.638.508-1.018.104-.379.155-.78.155-1.203v-9.34h3.783v9.646zM96.789 23.712c-.767.394-1.663.715-2.688.963-1.025.248-2.142.372-3.35.372-1.254 0-2.408-.197-3.463-.59-1.054-.395-1.96-.949-2.72-1.663a7.578 7.578 0 01-1.78-2.57c-.429-1-.642-2.111-.642-3.337 0-1.24.217-2.362.652-3.368a7.493 7.493 0 011.803-2.57 8 8 0 012.699-1.63c1.032-.38 2.145-.569 3.34-.569 1.238 0 2.389.186 3.45.558 1.062.372 1.925.871 2.588 1.498l-2.389 2.69c-.368-.422-.855-.768-1.46-1.038-.604-.27-1.29-.405-2.057-.405-.663 0-1.275.12-1.836.361-.56.24-1.047.576-1.46 1.006a4.56 4.56 0 00-.962 1.532 5.32 5.32 0 00-.343 1.935c0 .715.104 1.371.31 1.97.207.597.513 1.111.918 1.541.406.43.907.766 1.504 1.007.597.24 1.28.36 2.046.36a7.75 7.75 0 001.261-.098 4.742 4.742 0 001.106-.317v-2.822H90.33V15.51h6.459v8.203zM159.307 16.866c0 1.356-.254 2.526-.763 3.51a7.095 7.095 0 01-2.013 2.429 8.429 8.429 0 01-2.82 1.4 11.547 11.547 0 01-3.186.448h-5.84V9.166h5.663c1.106 0 2.198.127 3.274.382a8.261 8.261 0 012.876 1.27c.84.59 1.519 1.381 2.035 2.373.516.991.774 2.216.774 3.675zm-3.937 0c0-.875-.144-1.6-.432-2.177a3.674 3.674 0 00-1.15-1.378 4.626 4.626 0 00-1.637-.733 8.13 8.13 0 00-1.891-.219h-1.88v9.057h1.791a8.22 8.22 0 001.958-.23 4.651 4.651 0 001.659-.755c.48-.35.863-.816 1.15-1.4.288-.583.432-1.305.432-2.165zM80.487 16.866c0 1.356-.255 2.526-.763 3.51a7.095 7.095 0 01-2.013 2.429 8.429 8.429 0 01-2.82 1.4 11.547 11.547 0 01-3.186.448h-5.84V9.166h5.663c1.106 0 2.197.127 3.274.382a8.261 8.261 0 012.875 1.27c.841.59 1.52 1.381 2.035 2.373.517.991.775 2.216.775 3.675zm-3.938 0c0-.875-.143-1.6-.431-2.177a3.674 3.674 0 00-1.15-1.378 4.626 4.626 0 00-1.637-.733 8.13 8.13 0 00-1.891-.219h-1.88v9.057h1.791a8.22 8.22 0 001.958-.23 4.651 4.651 0 001.659-.755c.479-.35.862-.816 1.15-1.4.288-.583.431-1.305.431-2.165zM60.468 24.653l-1.216-3.04H53.19l-1.15 3.04h-4.115l6.57-15.487h3.672l6.503 15.487h-4.203zM56.265 13.3l-1.99 5.316h3.937L56.265 13.3zM139.252 24.653l-3.385-6.147h-1.283v6.147h-3.716V9.166h5.973c.752 0 1.485.076 2.2.23a5.757 5.757 0 011.925.776 4.08 4.08 0 011.36 1.444c.34.598.509 1.341.509 2.23 0 1.05-.288 1.933-.863 2.648-.575.714-1.371 1.225-2.389 1.531l4.093 6.628h-4.424zm-.155-10.74c0-.365-.078-.66-.232-.886a1.586 1.586 0 00-.598-.525 2.615 2.615 0 00-.818-.252 6.102 6.102 0 00-.874-.066h-2.013v3.61h1.792c.31 0 .627-.026.951-.077.324-.05.62-.142.885-.273.265-.132.483-.321.652-.569.17-.248.255-.569.255-.963z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#68BC71",
    d: "M17.154 0C11.792 0 5.324 1.252 0 4.007c0 5.95-.073 20.776 17.154 30.905C34.382 24.784 34.31 9.959 34.31 4.008 28.984 1.252 22.517 0 17.154 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#67B279",
    d: "M17.137 34.902C-.073 24.772 0 9.956 0 4.007 5.319 1.255 11.778.003 17.137 0v34.902z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFF",
    d: "M16.529 23.295l10.373-13.88c-.76-.605-1.427-.179-1.794.152l-.013.001-8.65 8.933-3.259-3.894c-1.554-1.783-3.668-.423-4.162-.063l7.505 8.75"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "block-ad",
    viewBox: "0 0 17 17"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "#DF3812",
    fillRule: "nonzero"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M14 7.186V1.445C14 .649 13.376 0 12.606 0H1.394C.629 0 0 .645 0 1.44v10.12C0 12.354.628 13 1.402 13h5.634v-.9H1.402c-.272 0-.502-.237-.502-.54V1.44c0-.302.23-.54.494-.54h11.212c.265 0 .494.238.494.545v5.741h.9zm0-5.741C14 .649 13.376 0 12.606 0H1.394C.629 0 0 .645 0 1.44v10.12C0 12.354.628 13 1.402 13h5.634v-.9H1.402c-.272 0-.502-.237-.502-.54V1.44c0-.302.23-.54.494-.54h11.212c.265 0 .494.238.494.545v5.741h.9V1.445z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M9.55 16.29V6.992l6.63 5.95-2.708-.011 1.134 2.6-2.172 1.083-1.126-2.581L9.55 16.29zm.9-7.282v4.662l1.078-1.385 1.352 3.1.56-.278-1.344-3.082 1.724.007-3.37-3.024z"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "sandwich",
    viewBox: "0 0 14 13"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M-5-6h24v24H-5z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#4A90E2",
    strokeLinecap: "square",
    d: "M.5.5h13M.5 6.25h13M.5 12.25h13"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "thumb-down",
    viewBox: "0 0 16 18"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M-4-4h24v24H-4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5A623",
    d: "M14.719 7.667c.208-.742.083-1.765-.585-2.377.129-.515.126-1.161-.141-1.734a1.895 1.895 0 00-.818-.878 2.337 2.337 0 00-.342-1.147C12.441.89 11.764.445 10.803.208c-.405-.1-1.28-.126-1.28-.126h-.02c-1.623 0-3.51.646-5.464 1.892l-2.023.299a1.21 1.21 0 00-1.05 1.191v5.838c0 .49.358.723.64.91.156.103.372.237.617.393.686.434 1.834 1.161 2.222 1.532.485.463.933 1.277 1.406 2.138.305.553.62 1.126.984 1.684.464.71 1.158 1.116 1.904 1.116.637 0 1.246-.307 1.63-.822.425-.572.533-1.33.294-2.081-.264-.83-.602-1.798-1.106-2.69-.006-.01-.011-.02 0-.04.013-.022.025-.023.037-.023h3.635c.889 0 1.592-.491 1.882-1.316.289-.82.113-1.808-.392-2.436zm-1.49 2.874H9.594c-.711 0-1.161.755-.814 1.368.425.753.736 1.588 1.034 2.525.322 1.011-.325 1.763-1.075 1.763-.4 0-.827-.213-1.154-.714-.94-1.44-1.603-3.095-2.525-3.976-.728-.696-3.203-2.117-3.203-2.205V3.464a.34.34 0 01.294-.33l2.139-.322a.349.349 0 00.135-.05C6.352 1.513 8.086.935 9.502.935c.382 0 .74.042 1.074.124 1.658.408 1.763 1.413 1.696 1.934a.335.335 0 00.253.366c.886.233.927 1.421.646 1.998-.079.16-.003.35.156.434.662.35.71 1.375.45 1.856a.321.321 0 00.087.406c.725.563.764 2.487-.635 2.487z"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "shield",
    viewBox: "0 0 14 15"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M-5-5h24v24H-5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#67B279",
    d: "M7 15a.477.477 0 01-.145-.023c-1.583-.504-2.93-1.47-4.005-2.873C2.004 11 1.326 9.625.836 8.019.01 5.309 0 2.896 0 2.794c0-.243.186-.446.43-.47.036-.003 3.722-.38 6.291-2.234a.477.477 0 01.558 0c2.568 1.855 6.255 2.23 6.292 2.234a.473.473 0 01.429.47c0 .102-.01 2.515-.836 5.225-.49 1.606-1.168 2.98-2.014 4.085-1.075 1.403-2.422 2.37-4.005 2.874A.478.478 0 017 15zM.963 3.208c.04.792.193 2.616.788 4.558C2.767 11.081 4.533 13.187 7 14.031c2.473-.846 4.24-2.96 5.255-6.286a19.5 19.5 0 00.782-4.537C11.974 3.054 9.22 2.532 7 1.048 4.78 2.532 2.027 3.054.963 3.208z"
  }))), /*#__PURE__*/react.createElement("symbol", {
    id: "small-cross",
    viewBox: "0 0 14 12"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#B267A0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.42857143,6.42857143 L17.604347,17.604347 M6.42857143,17.5714286 L17.604347,6.39565302",
    transform: "translate(-5 -6)"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "removing-user-rules",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#67B279",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.29054 5.04252C6.40428 4.94907 6.52035 4.85835 6.63866 4.77047"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#67B279",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.55511 3.68292C8.82001 3.57307 9.0913 3.47551 9.36826 3.39095C9.51032 3.34758 9.65388 3.30762 9.79883 3.27119"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#67B279",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364C4.80704 17.535 4.13901 16.545 3.68286 15.4449"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "apple",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M14.8902 4.03331C15.5764 3.23057 16.0389 2.11243 15.9124 1C14.9235 1.038 13.7272 1.63744 13.0182 2.43923C12.3815 3.15077 11.8257 4.2879 11.9751 5.37849C13.0782 5.46114 14.204 4.837 14.8902 4.03331M17.3638 11.0936C17.3914 13.9692 19.9715 14.9259 20 14.9382C19.9791 15.0057 19.5879 16.3014 18.641 17.6409C17.8215 18.798 16.9717 19.9503 15.6326 19.975C14.3173 19.9988 13.8938 19.2208 12.3892 19.2208C10.8854 19.2208 10.4153 19.9503 9.17045 19.9988C7.87802 20.0453 6.893 18.7467 6.06786 17.5934C4.37952 15.2346 3.08994 10.9274 4.82206 8.02041C5.68241 6.57738 7.21943 5.66254 8.88874 5.63974C10.1574 5.61599 11.3556 6.46528 12.1312 6.46528C12.9069 6.46528 14.363 5.44404 15.8934 5.59414C16.5339 5.61979 18.3326 5.84399 19.487 7.47891C19.3938 7.53496 17.3409 8.69015 17.3638 11.0936"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "android",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.6 17.25C6.6 17.7312 7.005 18.125 7.5 18.125H8.4V21.1875C8.4 21.9137 9.003 22.5 9.75 22.5C10.497 22.5 11.1 21.9137 11.1 21.1875V18.125H12.9V21.1875C12.9 21.9137 13.503 22.5 14.25 22.5C14.997 22.5 15.6 21.9137 15.6 21.1875V18.125H16.5C16.995 18.125 17.4 17.7312 17.4 17.25V8.49995H6.6V17.25V17.25ZM3.85 8.49995C3.103 8.49995 2.5 9.0862 2.5 9.81245V15.9375C2.5 16.6637 3.103 17.25 3.85 17.25C4.597 17.25 5.2 16.6637 5.2 15.9375V9.81245C5.2 9.0862 4.597 8.49995 3.85 8.49995V8.49995ZM20.15 8.49995C19.403 8.49995 18.8 9.0862 18.8 9.81245V15.9375C18.8 16.6637 19.403 17.25 20.15 17.25C20.897 17.25 21.5 16.6637 21.5 15.9375V9.81245C21.5 9.0862 20.897 8.49995 20.15 8.49995V8.49995ZM15.177 3.08995L16.347 1.95245C16.527 1.77745 16.527 1.5062 16.347 1.3312C16.167 1.1562 15.888 1.1562 15.708 1.3312L14.376 2.6262C13.665 2.2762 12.855 2.07495 12 2.07495C11.136 2.07495 10.326 2.2762 9.60598 2.6262L8.26498 1.3312C8.08498 1.1562 7.80598 1.1562 7.62598 1.3312C7.44598 1.5062 7.44598 1.77745 7.62598 1.95245L8.80498 3.0987C7.47298 4.05245 6.59998 5.5837 6.59998 7.32495H17.4C17.4 5.5837 16.527 4.0437 15.177 3.08995V3.08995ZM10.2 5.57495H9.29999V4.69995H10.2V5.57495V5.57495ZM14.7 5.57495H13.8V4.69995H14.7V5.57495V5.57495Z"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "cross",
    viewBox: "0 0 15.642 15.642"
  }, /*#__PURE__*/react.createElement("path", {
    d: "m8.882 7.821 6.541-6.541c.293-.293.293-.768 0-1.061s-.768-.293-1.061 0l-6.541 6.541-6.541-6.54c-.293-.293-.768-.293-1.061 0s-.293.768 0 1.061l6.541 6.541-6.54 6.54c-.293.293-.293.768 0 1.061.147.146.338.22.53.22s.384-.073.53-.22l6.541-6.541 6.541 6.541c.147.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.061z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "cross-white",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M6.42857 6.79596L17.6043 18.6103",
    stroke: "#F3F3F3",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6.42871 18.5755L17.6045 6.76111",
    stroke: "#F3F3F3",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "cross-gray",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M6.42857 6.79596L17.6043 18.6103",
    stroke: "#888888",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6.42871 18.5755L17.6045 6.76111",
    stroke: "#888888",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "play",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 12L7 20L7 4L19 12Z",
    stroke: "#a4a4a4",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "#fff"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "circle",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12ZM18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12Z",
    fill: "#c23814"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "checkmark",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.9842 4.86804C21.6094 5.4116 21.6755 6.35904 21.132 6.98421L10.6987 18.9842C10.4212 19.3034 10.0219 19.4905 9.5991 19.4997C9.1763 19.5088 8.76928 19.339 8.47828 19.0322L2.91156 13.1617C2.34153 12.5606 2.36674 11.6112 2.96787 11.0412C3.569 10.4711 4.51841 10.4963 5.08845 11.0975L9.51856 15.7693L18.868 5.01584C19.4116 4.39066 20.359 4.32449 20.9842 4.86804Z",
    fill: "#67b279"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "exclamation",
    viewBox: "0 0 4 24"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.9697 6.88858V0H0V6.88858L0.848485 15.4217H3.12121L3.9697 6.88858ZM4 22V17.8731H0V22H4Z",
    fill: "#D58500"
  })), /*#__PURE__*/react.createElement("symbol", {
    id: "select",
    viewBox: "0 0 14 8"
  }, /*#__PURE__*/react.createElement("path", {
    d: "m6 10 6 6 6-6",
    fill: "none",
    stroke: "#888",
    strokeLinecap: "round",
    strokeWidth: "1.5",
    transform: "translate(-5 -9)"
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Main/main.pcss
var main = __webpack_require__(21936);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Main/main.pcss

      
      
      
      
      
      
      
      
      

var main_options = {};

main_options.styleTagTransform = (styleTagTransform_default());
main_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_options.insert = insertBySelector_default().bind(null, "head");
    
main_options.domAPI = (styleDomAPI_default());
main_options.insertStyleElement = (insertStyleElement_default());

var main_update = injectStylesIntoStyleTag_default()(main/* default */.Z, main_options);




       /* harmony default export */ const Main_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Main/Main.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */








const Main = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const switchersMap = {
    [POPUP_STATES.APPLICATION_ENABLED]: {
      handler: () => {
        store.toggleAllowlisted();
      },
      mode: 'enabled'
    },
    [POPUP_STATES.APPLICATION_FILTERING_DISABLED]: {
      handler: () => {
        store.changeApplicationFilteringDisabled(false);
      },
      mode: 'disabled'
    },
    [POPUP_STATES.APPLICATION_UNAVAILABLE]: {
      mode: 'unavailable'
    },
    [POPUP_STATES.SITE_IN_EXCEPTION]: {
      mode: 'in-exception'
    },
    [POPUP_STATES.SITE_ALLOWLISTED]: {
      handler: () => {
        store.toggleAllowlisted();
      },
      mode: 'allowlisted'
    }
  };
  const switcher = switchersMap[store.popupState];
  return /*#__PURE__*/react.createElement("div", {
    className: `main main--${switcher.mode}`
  }, store.isInitialDataReceived && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "main__header"
  }, store.showInfoAboutFullVersion && /*#__PURE__*/react.createElement("div", {
    className: "main__cta-link"
  }, /*#__PURE__*/react.createElement("a", {
    href: COMPARE_URL,
    target: "_blank",
    rel: "noreferrer"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_header_cta_link'))), /*#__PURE__*/react.createElement("div", {
    className: "main__stats"
  }, /*#__PURE__*/react.createElement("div", {
    className: "main__total-blocked-tab"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_tab_blocked_count', {
    num: store.totalBlockedTab.toLocaleString()
  })), /*#__PURE__*/react.createElement("div", {
    className: "main__total-blocked-all"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_tab_blocked_all_count', {
    num: store.totalBlocked.toLocaleString()
  })))), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "switcher",
    onClick: switcher.handler,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_switch_button')
  }, /*#__PURE__*/react.createElement("div", {
    className: `switcher__center switcher__center--${switcher.mode}`
  }), /*#__PURE__*/react.createElement("div", {
    className: "switcher__btn"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#checkmark",
    classname: "icon--checkmark switcher__icon switcher__icon--checkmark",
    width: "66",
    height: "66"
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#circle",
    classname: "icon--circle switcher__icon switcher__icon--circle"
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#play",
    classname: "icon--play switcher__icon switcher__icon--play"
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#exclamation",
    classname: "icon--exclamation switcher__icon switcher__icon--exclamation"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "switcher__info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "current-site"
  }, store.currentSite), /*#__PURE__*/react.createElement("div", {
    className: "current-status"
  }, store.currentStatusMessage))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Main/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Select/index.js + 5 modules
var Select = __webpack_require__(78650);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/Filters.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */







const Filters = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const {
    stats
  } = store;
  if (!stats) {
    return null;
  }
  const statsData = store.statsDataByType;
  const existingGroupsOptions = stats.blockedGroups.filter(group => {
    return statsData.find(data => data.groupId === group.groupId);
  }).map(({
    groupId,
    groupName
  }) => ({
    value: groupId,
    title: groupName
  }));
  const handleBlockedTypeChange = value => {
    store.setSelectedBlockedType(value);
  };
  const handleTimeRangeChange = value => {
    store.setSelectedTimeRange(value);
  };
  const timeRangeOptions = [{
    value: TIME_RANGES.DAY,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_time_day')
  }, {
    value: TIME_RANGES.WEEK,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_time_week')
  }, {
    value: TIME_RANGES.MONTH,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_time_month')
  }, {
    value: TIME_RANGES.YEAR,
    title: reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_time_year')
  }];

  /*
   * We cannot use native select because there is a bug in chromium browsers:
   * after a mouse click, chromium browsers activate the ":focus-visible" pseudo-class,
   * which should only be activated when selecting with the keyboard and not the mouse.
   * @see https://bugs.chromium.org/p/chromium/issues/detail?id=1383062
   */
  return /*#__PURE__*/react.createElement("div", {
    className: "stats-chart__filters"
  }, /*#__PURE__*/react.createElement(Select/* Select */.P, {
    id: "blocked-type",
    name: "blocked-type",
    handler: handleBlockedTypeChange,
    value: store.selectedBlockedType,
    options: existingGroupsOptions,
    className: "stats-chart__select-in",
    popupModification: true
  }), /*#__PURE__*/react.createElement(Select/* Select */.P, {
    id: "time-range",
    name: "time-range",
    className: "stats-chart__select-in",
    handler: handleTimeRangeChange,
    value: store.selectedTimeRange,
    options: timeRangeOptions,
    popupModification: true
  }));
});
// EXTERNAL MODULE: ./node_modules/c3/c3.js
var c3 = __webpack_require__(36554);
var c3_default = /*#__PURE__*/__webpack_require__.n(c3);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/c3/c3.css
var c3_c3 = __webpack_require__(25460);
;// CONCATENATED MODULE: ./node_modules/c3/c3.css

      
      
      
      
      
      
      
      
      

var c3_options = {};

c3_options.styleTagTransform = (styleTagTransform_default());
c3_options.setAttributes = (setAttributesWithoutAttributes_default());

      c3_options.insert = insertBySelector_default().bind(null, "head");
    
c3_options.domAPI = (styleDomAPI_default());
c3_options.insertStyleElement = (insertStyleElement_default());

var c3_update = injectStylesIntoStyleTag_default()(c3_c3/* default */.Z, c3_options);




       /* harmony default export */ const node_modules_c3_c3 = (c3_c3/* default */.Z && c3_c3/* default.locals */.Z.locals ? c3_c3/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Stats/StatsChart/chart.pcss
var chart = __webpack_require__(84966);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/chart.pcss

      
      
      
      
      
      
      
      
      

var chart_options = {};

chart_options.styleTagTransform = (styleTagTransform_default());
chart_options.setAttributes = (setAttributesWithoutAttributes_default());

      chart_options.insert = insertBySelector_default().bind(null, "head");
    
chart_options.domAPI = (styleDomAPI_default());
chart_options.insertStyleElement = (insertStyleElement_default());

var chart_update = injectStylesIntoStyleTag_default()(chart/* default */.Z, chart_options);




       /* harmony default export */ const StatsChart_chart = (chart/* default */.Z && chart/* default.locals */.Z.locals ? chart/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/Chart.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */







const DAYS_OF_WEEK = [reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_mon'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_tue'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_wed'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_thu'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_fri'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_sat'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_week_days_sun')];
const dayOfWeekAsString = dayIndex => {
  return DAYS_OF_WEEK[dayIndex];
};
const MONTHS_OF_YEAR = [reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_jan'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_feb'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_mar'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_apr'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_may'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_jun'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_jul'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_aug'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_sep'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_oct'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_nov'), reactTranslator/* reactTranslator.getMessage */._.getMessage('popup_statistics_months_dec')];
const monthsAsString = monthIndex => {
  return MONTHS_OF_YEAR[monthIndex];
};
const selectRequestsStatsData = (stats, range, type) => {
  const result = [];
  switch (range) {
    case TIME_RANGES.DAY:
      stats.today.forEach(d => {
        result.push(d[type]);
      });
      break;
    case TIME_RANGES.WEEK:
      stats.lastWeek.forEach(d => {
        result.push(d[type]);
      });
      break;
    case TIME_RANGES.MONTH:
      stats.lastMonth.forEach(d => {
        result.push(d[type]);
      });
      break;
    case TIME_RANGES.YEAR:
      stats.lastYear.forEach(d => {
        result.push(d[type]);
      });
      break;
    default:
      break;
  }
  return result.map(val => val === undefined ? 0 : val);
};
const getCategoriesLines = (statsData, range) => {
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const lastDayOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  let categories = [];
  const lines = [];
  const HOURS_PER_DAY = 24;
  const DAYS_PER_WEEK = 7;
  const DAYS_PER_MONTH = 30;
  const MONTHS_PER_YEAR = 12;
  switch (range) {
    case TIME_RANGES.DAY:
      for (let i = 1; i <= HOURS_PER_DAY; i += 1) {
        if (i % 3 === 0) {
          const hour = (i + now.getHours()) % HOURS_PER_DAY;
          categories.push(hour.toString());
          lines.push({
            value: i - 1
          });
        } else {
          categories.push('');
        }
      }
      break;
    case TIME_RANGES.WEEK:
      for (let i = 0; i < DAYS_PER_WEEK; i += 1) {
        categories.push(dayOfWeekAsString((day + i) % DAYS_PER_WEEK));
        lines.push({
          value: i
        });
      }
      break;
    case TIME_RANGES.MONTH:
      for (let i = 0; i <= DAYS_PER_MONTH; i += 1) {
        if (i % 3 === 0) {
          const c = (i + now.getDate()) % lastDayOfPrevMonth + 1;
          categories.push(c.toString());
          lines.push({
            value: i
          });
        } else {
          categories.push('');
        }
      }
      break;
    case TIME_RANGES.YEAR:
      for (let i = 0; i <= MONTHS_PER_YEAR; i += 1) {
        categories.push(monthsAsString((month + i) % MONTHS_PER_YEAR));
        categories = categories.slice(-statsData.length);
        lines.push({
          value: i
        });
      }
      break;
    default:
      throw new Error(`Wrong range type: ${range}`);
  }
  return {
    categories,
    lines
  };
};
const Chart = ({
  stats,
  range,
  type
}) => {
  (0,react.useEffect)(() => {
    const statsData = selectRequestsStatsData(stats, range, type);
    const categoriesLines = getCategoriesLines(statsData, range);
    const {
      categories
    } = categoriesLines;
    const {
      lines
    } = categoriesLines;
    const grad1 = '<linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">' + '  <stop offset="0%" style="stop-color:#73BE66;stop-opacity:1" />' + '  <stop offset="23%" style="stop-color:#6DBE85;stop-opacity:1" />' + '  <stop offset="100%" style="stop-color:#65BDA8;stop-opacity:1" />' + '</linearGradient>';
    c3_default().generate({
      bindTo: '#chart',
      size: {
        height: 230
      },
      data: {
        columns: [['data1'].concat(statsData)],
        types: {
          data1: 'area-spline'
        },
        colors: {
          data1: 'url(#grad1)'
        }
      },
      padding: {
        left: 15,
        right: 15
      },
      axis: {
        x: {
          show: true,
          type: 'category',
          categories,
          tick: {
            outer: false,
            multiline: false
          }
        },
        y: {
          show: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        lines: {
          front: false
        },
        x: {
          lines
        },
        focus: {
          show: true
        }
      },
      spline: {
        interpolation: {
          type: 'basis'
        }
      },
      point: {
        show: false
      },
      tooltip: {
        position(data, width, height, element) {
          const chart = document.querySelector('#chart');
          const elementRect = element.getBoundingClientRect();
          const elementCenterPosition = elementRect.left + elementRect.width / 2;
          const tooltipHalfWidth = chart.querySelector('.chart__tooltip').clientWidth / 2;
          const tooltipLeft = elementCenterPosition - tooltipHalfWidth;
          // eslint-disable-next-line no-undef
          const top = d3.mouse(element)[1] - 50;
          return {
            top,
            left: tooltipLeft
          };
        },
        contents(d) {
          const [{
            value
          }] = d;
          return `<div id="tooltip" class="chart__tooltip">${value}</div>`;
        }
      },
      oninit() {
        // eslint-disable-next-line react/no-this-in-sfc
        this.svg[0][0].getElementsByTagName('defs')[0].innerHTML += grad1;
      }
    });
  }, [range, type, stats]);
  return /*#__PURE__*/react.createElement("div", {
    className: "chart",
    id: "chart"
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Stats/StatsChart/stats-chart.pcss
var stats_chart = __webpack_require__(95191);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/stats-chart.pcss

      
      
      
      
      
      
      
      
      

var stats_chart_options = {};

stats_chart_options.styleTagTransform = (styleTagTransform_default());
stats_chart_options.setAttributes = (setAttributesWithoutAttributes_default());

      stats_chart_options.insert = insertBySelector_default().bind(null, "head");
    
stats_chart_options.domAPI = (styleDomAPI_default());
stats_chart_options.insertStyleElement = (insertStyleElement_default());

var stats_chart_update = injectStylesIntoStyleTag_default()(stats_chart/* default */.Z, stats_chart_options);




       /* harmony default export */ const StatsChart_stats_chart = (stats_chart/* default */.Z && stats_chart/* default.locals */.Z.locals ? stats_chart/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/StatsChart.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */







const StatsChart = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const {
    stats
  } = store;
  if (!stats) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "stats-chart"
  }, /*#__PURE__*/react.createElement(Filters, null), /*#__PURE__*/react.createElement(Chart, {
    stats: stats,
    range: store.selectedTimeRange,
    type: store.selectedBlockedType
  }));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Stats/StatsChart/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/MainContainer/main-container.pcss
var main_container = __webpack_require__(20291);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/MainContainer/main-container.pcss

      
      
      
      
      
      
      
      
      

var main_container_options = {};

main_container_options.styleTagTransform = (styleTagTransform_default());
main_container_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_container_options.insert = insertBySelector_default().bind(null, "head");
    
main_container_options.domAPI = (styleDomAPI_default());
main_container_options.insertStyleElement = (insertStyleElement_default());

var main_container_update = injectStylesIntoStyleTag_default()(main_container/* default */.Z, main_container_options);




       /* harmony default export */ const MainContainer_main_container = (main_container/* default */.Z && main_container/* default.locals */.Z.locals ? main_container/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/MainContainer/MainContainer.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */








const MainContainer = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(popupStore);
  const contentMap = {
    [VIEW_STATES.ACTIONS]: Main,
    [VIEW_STATES.STATS]: StatsChart
  };
  const Content = contentMap[store.viewState];
  return /*#__PURE__*/react.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/react.createElement(Content, null));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/MainContainer/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/PromoNotification/promo-notification.pcss
var promo_notification = __webpack_require__(60384);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/PromoNotification/promo-notification.pcss

      
      
      
      
      
      
      
      
      

var promo_notification_options = {};

promo_notification_options.styleTagTransform = (styleTagTransform_default());
promo_notification_options.setAttributes = (setAttributesWithoutAttributes_default());

      promo_notification_options.insert = insertBySelector_default().bind(null, "head");
    
promo_notification_options.domAPI = (styleDomAPI_default());
promo_notification_options.insertStyleElement = (insertStyleElement_default());

var promo_notification_update = injectStylesIntoStyleTag_default()(promo_notification/* default */.Z, promo_notification_options);




       /* harmony default export */ const PromoNotification_promo_notification = (promo_notification/* default */.Z && promo_notification/* default.locals */.Z.locals ? promo_notification/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/PromoNotification/PromoNotification.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */








const PromoNotification = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    promoNotification,
    closePromoNotification,
    openPromoNotificationUrl
  } = (0,react.useContext)(popupStore);
  const [notificationOnClose, setNotificationOnClose] = (0,react.useState)(false);

  // schedule notification removal
  (0,react.useEffect)(() => {
    if (promoNotification) {
      messenger/* messenger.sendMessage */.d.sendMessage(messages/* MessageType.SetNotificationViewed */.Cs.SetNotificationViewed, {
        withDelay: true
      });
    }
  }, [promoNotification]);
  if (!promoNotification) {
    return null;
  }
  const closeTimeoutMs = 300;
  const handleNotificationClose = e => {
    setNotificationOnClose(true);
    setTimeout(() => {
      e.preventDefault();
      closePromoNotification();
    }, closeTimeoutMs);
  };
  const handleNotificationClick = e => {
    e.preventDefault();
    openPromoNotificationUrl();
  };
  const {
    title,
    btn
  } = promoNotification.text;
  const notificationClassnames = classnames_default()('promo-notification', {
    'promo-notification--close': notificationOnClose
  });
  return /*#__PURE__*/react.createElement("div", {
    className: notificationClassnames
  }, /*#__PURE__*/react.createElement("button", {
    "aria-label": "close",
    type: "button",
    className: "promo-notification__close",
    onClick: handleNotificationClose
  }, /*#__PURE__*/react.createElement("svg", {
    className: "icon icon--button"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#cross-gray"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "promo-notification__content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "promo-notification__title"
  }, title), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "promo-notification__btn",
    onClick: handleNotificationClick
  }, btn)));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/PromoNotification/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useAppearanceTheme.js
var useAppearanceTheme = __webpack_require__(72730);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/styles/main.pcss
var styles_main = __webpack_require__(65201);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/styles/main.pcss

      
      
      
      
      
      
      
      
      

var styles_main_options = {};

styles_main_options.styleTagTransform = (styleTagTransform_default());
styles_main_options.setAttributes = (setAttributesWithoutAttributes_default());

      styles_main_options.insert = insertBySelector_default().bind(null, "head");
    
styles_main_options.domAPI = (styleDomAPI_default());
styles_main_options.insertStyleElement = (insertStyleElement_default());

var styles_main_update = injectStylesIntoStyleTag_default()(styles_main/* default */.Z, styles_main_options);




       /* harmony default export */ const popup_styles_main = (styles_main/* default */.Z && styles_main/* default.locals */.Z.locals ? styles_main/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/popup/components/Popup/popup.pcss
var popup = __webpack_require__(12845);
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Popup/popup.pcss

      
      
      
      
      
      
      
      
      

var popup_options = {};

popup_options.styleTagTransform = (styleTagTransform_default());
popup_options.setAttributes = (setAttributesWithoutAttributes_default());

      popup_options.insert = insertBySelector_default().bind(null, "head");
    
popup_options.domAPI = (styleDomAPI_default());
popup_options.insertStyleElement = (insertStyleElement_default());

var popup_update = injectStylesIntoStyleTag_default()(popup/* default */.Z, popup_options);




       /* harmony default export */ const Popup_popup = (popup/* default */.Z && popup/* default.locals */.Z.locals ? popup/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Popup/Popup.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */














const Popup = (0,mobxreact_esm/* observer */.Pi)(() => {
  const {
    appearanceTheme,
    getPopupData,
    updateBlockedStats
  } = (0,react.useContext)(popupStore);
  (0,useAppearanceTheme/* useAppearanceTheme */.D)(appearanceTheme);

  // retrieve init data
  (0,react.useEffect)(() => {
    (async () => {
      await getPopupData();
    })();
  }, [getPopupData]);

  // subscribe to stats change
  (0,react.useEffect)(() => {
    const messageHandler = message => {
      switch (message.type) {
        case 'updateTotalBlocked':
          {
            updateBlockedStats(message.data);
            break;
          }
        case 'appInitialized':
          {
            getPopupData();
            break;
          }
        default:
          break;
      }
    };
    messenger/* messenger.onMessage.addListener */.d.onMessage.addListener(messageHandler);
    return () => {
      messenger/* messenger.onMessage.removeListener */.d.onMessage.removeListener(messageHandler);
    };
  }, [updateBlockedStats, getPopupData]);
  return /*#__PURE__*/react.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react.createElement(Icons, null), /*#__PURE__*/react.createElement(Header, null), /*#__PURE__*/react.createElement(MainContainer, null), /*#__PURE__*/react.createElement(Tabs, null), /*#__PURE__*/react.createElement(Footer, null), /*#__PURE__*/react.createElement(PromoNotification, null));
});
;// CONCATENATED MODULE: ./Extension/src/pages/popup/components/Popup/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


;// CONCATENATED MODULE: ./Extension/src/pages/popup/index.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





const popupPage = {
  init: () => {
    document.documentElement.lang = i18n/* i18n.getUILanguage */.a.getUILanguage();
    react_dom.render( /*#__PURE__*/react.createElement(Popup, null), document.getElementById('root'));
  }
};
;// CONCATENATED MODULE: ./Extension/pages/popup/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


popupPage.init();

/***/ }),

/***/ 51699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zi": () => (/* reexport */ AllowlistOption),
  "A0": () => (/* reexport */ ExtensionSpecificSettingsOption),
  "_q": () => (/* reexport */ FiltersOption),
  "bf": () => (/* reexport */ GeneralSettingsOption),
  "Rv": () => (/* reexport */ PROTOCOL_VERSION),
  "_p": () => (/* reexport */ RootOption),
  "kE": () => (/* reexport */ SchemaPreprocessor),
  "qY": () => (/* reexport */ SettingOption),
  "Fq": () => (/* reexport */ StealthOption),
  "qf": () => (/* reexport */ UserFilterOption),
  "WD": () => (/* reexport */ configValidator),
  "Cc": () => (/* reexport */ customFilterMetadataStorageDataValidator),
  "_F": () => (/* reexport */ filterStateStorageDataValidator),
  "Pr": () => (/* reexport */ filterVersionStorageDataValidator),
  "rs": () => (/* reexport */ groupStateStorageDataValidator),
  "dj": () => (/* reexport */ hitStatsStorageDataValidator),
  "mj": () => (/* reexport */ i18nMetadataValidator),
  "h0": () => (/* reexport */ localScriptRulesValidator),
  "Qy": () => (/* reexport */ metadataValidator),
  "hf": () => (/* reexport */ notificationTextRecordValidator),
  "er": () => (/* reexport */ pageStatsValidator),
  "_": () => (/* reexport */ safebrowsingStorageDataValidator),
  "hN": () => (/* reexport */ settingsValidator)
});

// UNUSED EXPORTS: CustomFilterOption, allowlistValidator, baseMetadataValidator, customFilterMetadataValidator, customFiltersConfigValidator, extensionSpecificSettingsConfigValidator, filterStateDataValidator, filterVersionDataValidator, filtersConfigValidator, filtersI18nRecordValidator, generalSettingsConfigValidator, groupI18nMetadataValidator, groupMetadataValidator, groupStateDataValidator, groupsI18nRecordValidator, hitStatsValidator, pageStatsDataItemValidator, pageStatsDataValidator, regularFilterI18nMetadataValidator, regularFilterMetadataValidator, safebrowsingCacheDataValidator, stealthConfigValidator, tagI18nMetadataValidator, tagMetadataValidator, tagsI18nRecordValidator, trustedDomainDataValidator, userFilterValidator

// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(1604);
// EXTERNAL MODULE: ./Extension/src/common/constants.ts
var constants = __webpack_require__(21059);
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/general-settings.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



// General settings configuration

let GeneralSettingsOption = /*#__PURE__*/function (GeneralSettingsOption) {
  GeneralSettingsOption["AppLanguage"] = "app-language";
  GeneralSettingsOption["AllowAcceptableAds"] = "allow-acceptable-ads";
  GeneralSettingsOption["ShowBlockedAdsCount"] = "show-blocked-ads-count";
  GeneralSettingsOption["AutodetectFilters"] = "autodetect-filters";
  GeneralSettingsOption["SafebrowsingEnabled"] = "safebrowsing-enabled";
  GeneralSettingsOption["FiltersUpdatePeriod"] = "filters-update-period";
  GeneralSettingsOption["AppearanceTheme"] = "appearance-theme";
  return GeneralSettingsOption;
}({});
const generalSettingsConfigValidator = lib/* default.object */.ZP.object({
  /**
   * The two-letter code of the application language that is used to display
   * the translations in the user interface.
   */
  [GeneralSettingsOption.AppLanguage]: lib/* default.string */.ZP.string().optional(),
  /**
   * This option allows for "Search advertising and self-promotion":
   * advertising that the user sees among search results when using online
   * search engines, as well as a kind of "first-party" advertising on sites
   * that promote that particular site or closely related sites, social
   * networks, and so on.
   *
   * @see https://adguard.com/kb/general/ad-filtering/search-ads/
   */
  [GeneralSettingsOption.AllowAcceptableAds]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Whether or not to show the number of blocked ads on the extension icon.
   */
  [GeneralSettingsOption.ShowBlockedAdsCount]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Should the extension automatically enable a language filter that matches
   * the top-level domain.
   */
  [GeneralSettingsOption.AutodetectFilters]: lib/* default.boolean */.ZP.boolean(),
  /**
   * This setting enables module that protects against malicious and phishing
   * sites by checking the url hash in a database of malicious or phishing
   * sites.
   *
   * @see https://adguard.com/kb/general/browsing-security/
   */
  [GeneralSettingsOption.SafebrowsingEnabled]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Time interval between filter updates.
   */
  [GeneralSettingsOption.FiltersUpdatePeriod]: lib/* default.nativeEnum */.ZP.nativeEnum(constants/* FiltersUpdateTime */.OL),
  // TODO: Should be not optional?
  /**
   * Appearance theme of the application.
   */
  [GeneralSettingsOption.AppearanceTheme]: lib/* default.enum */.ZP["enum"](['system', 'dark', 'light']).optional()
});

/**
 * Contains general application settings: appearance theme, language, time
 * to check for updates to filters and some filtering options.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/extension-specific-settings.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Extension specific settings configuration.
 */
let ExtensionSpecificSettingsOption = /*#__PURE__*/function (ExtensionSpecificSettingsOption) {
  ExtensionSpecificSettingsOption["UseOptimizedFilters"] = "use-optimized-filters";
  ExtensionSpecificSettingsOption["CollectHitsCount"] = "collect-hits-count";
  ExtensionSpecificSettingsOption["ShowContextMenu"] = "show-context-menu";
  ExtensionSpecificSettingsOption["ShowInfoAboutAdguard"] = "show-info-about-adguard";
  ExtensionSpecificSettingsOption["ShowAppUpdatedInfo"] = "show-app-updated-info";
  ExtensionSpecificSettingsOption["HideRateAdguard"] = "hide-rate-adguard";
  ExtensionSpecificSettingsOption["UserRulesEditorWrap"] = "user-rules-editor-wrap";
  return ExtensionSpecificSettingsOption;
}({});
const extensionSpecificSettingsConfigValidator = lib/* default.object */.ZP.object({
  /**
   * If the flag is set to true, the application uses the optimized versions
   * of filter lists — the lists which contain needed and popular rules.
   *
   * @see https://adguard.com/kb/general/ad-filtering/create-own-filters/#not_optimized-hint for details.
   */
  [ExtensionSpecificSettingsOption.UseOptimizedFilters]: lib/* default.boolean */.ZP.boolean(),
  /**
   * If the flag is set to true, the application will send anonymous
   * statistics about the use of ad filters, which will help us to improve and
   * optimize them: for example, to remove obsolete rules in order to reduce
   * the time it takes to apply the rules.
   *
   * @see https://adguard.com/kb/general/ad-filtering/tracking-filter-statistics/ for clarification.
   */
  [ExtensionSpecificSettingsOption.CollectHitsCount]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Whether or not to add filtering options (add domain to allowlist,
   * enable or disable filtering) to the context menu (available by
   * right-clicking) in the browser.
   */
  [ExtensionSpecificSettingsOption.ShowContextMenu]: lib/* default.boolean */.ZP.boolean(),
  /**
   * If set to true - a banner will be displayed in the extensions
   * settings with information about AdGuard's system ad blocking app.
   */
  [ExtensionSpecificSettingsOption.ShowInfoAboutAdguard]: lib/* default.boolean */.ZP.boolean(),
  /**
   * If set to true - the extension will show app update notifications.
   */
  [ExtensionSpecificSettingsOption.ShowAppUpdatedInfo]: lib/* default.boolean */.ZP.boolean(),
  /**
   * If set to true - the extension will hide the block about requesting
   * feedback with rating in the extension settings.
   */
  [ExtensionSpecificSettingsOption.HideRateAdguard]: lib/* default.boolean */.ZP.boolean(),
  /**
   * If set to true - the extension will enable word wrap in the user rules
   * editor to display a window without horizontal scroll bars.
   */
  [ExtensionSpecificSettingsOption.UserRulesEditorWrap]: lib/* default.boolean */.ZP.boolean()
});

/**
 * Contains some additional extension settings and UI settings.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/custom-filters.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Keys of options for custom filter in the configuration.
 */
let CustomFilterOption = /*#__PURE__*/function (CustomFilterOption) {
  CustomFilterOption["CustomUrl"] = "customUrl";
  CustomFilterOption["Title"] = "title";
  CustomFilterOption["Trusted"] = "trusted";
  CustomFilterOption["Enabled"] = "enabled";
  return CustomFilterOption;
}({});
const customFiltersConfigValidator = lib/* default.array */.ZP.array(lib/* default.object */.ZP.object({
  /**
   * The filter subscription URL from which the application retrieved
   * the rules when adding the filter and should retrieve the rules when
   * updating it.
   */
  [CustomFilterOption.CustomUrl]: lib/* default.string */.ZP.string(),
  /**
   * Name of the filter.
   */
  [CustomFilterOption.Title]: lib/* default.string */.ZP.string().optional(),
  /**
   * If this filter is not trusted - tsurlfilter will not execute JS rules
   * and will not apply header removal rules from this filter.
   * Otherwise, no restrictions.
   *
   * @see https://adguard.com/kb/general/ad-filtering/create-own-filters/#trusted-filters.
   */
  [CustomFilterOption.Trusted]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Is filter enabled or not.
   */
  [CustomFilterOption.Enabled]: lib/* default.boolean */.ZP.boolean()
}));

/**
 * Describes custom filter information. This type has several of the same
 * fields as {@link CustomFilterMetadata} - this is because this type is only
 * used to import and export custom filters, so we only need a small set of
 * custom filter settings.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/user-filter.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// User filter configuration

let UserFilterOption = /*#__PURE__*/function (UserFilterOption) {
  UserFilterOption["Rules"] = "rules";
  UserFilterOption["DisabledRules"] = "disabled-rules";
  UserFilterOption["Enabled"] = "enabled";
  return UserFilterOption;
}({});
const userFilterValidator = lib/* default.object */.ZP.object({
  /**
   * User rules concatenated with '\n'.
   */
  [UserFilterOption.Rules]: lib/* default.string */.ZP.string(),
  /**
   * In previous versions, rules could be marked as disabled.
   * Currently not in use.
   *
   * @deprecated
   */
  [UserFilterOption.DisabledRules]: lib/* default.string */.ZP.string(),
  /**
   * Is enabled user rules or not.
   */
  [UserFilterOption.Enabled]: lib/* default.boolean */.ZP.boolean().optional()
});

/**
 * Contains the user rules filter and its status: enabled or disabled.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/allowlist.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// Allowlist configuration

let AllowlistOption = /*#__PURE__*/function (AllowlistOption) {
  AllowlistOption["Inverted"] = "inverted";
  AllowlistOption["Domains"] = "domains";
  AllowlistOption["InvertedDomains"] = "inverted-domains";
  AllowlistOption["Enabled"] = "enabled";
  return AllowlistOption;
}({});
const allowlistValidator = lib/* default.object */.ZP.object({
  /**
   * If `AllowlistOption.Inverted` === false (the default state),
   * the extension will use this list of domains to disable ad blocking on
   * them. In other words, the extension will apply ad blocking everywhere,
   * EXCEPT the domains on this list.
   */
  [AllowlistOption.Domains]: lib/* default.array */.ZP.array(lib/* default.string */.ZP.string()),
  /**
   * If `AllowlistOption.Inverted` === true, the extension will use this list
   * to disable ad blocking for all sites but not these sites. In other words,
   * the extension will work ONLY on domains from this list.
   */
  [AllowlistOption.InvertedDomains]: lib/* default.array */.ZP.array(lib/* default.string */.ZP.string()),
  /**
   * Is allowlist list enabled or not.
   */
  [AllowlistOption.Enabled]: lib/* default.boolean */.ZP.boolean().optional(),
  /**
   * If this flag is true, the application will work ONLY with domains from
   * the 'domains' list, otherwise it will work everywhere EXCLUDING domains
   * from the list.
   */
  [AllowlistOption.Inverted]: lib/* default.boolean */.ZP.boolean().optional()
});

/**
 * Describes a special list of domains on which the extension should work or
 * should exclude them from filtering.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/filters.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





// AdGuard filters configuration
let FiltersOption = /*#__PURE__*/function (FiltersOption) {
  FiltersOption["EnabledGroups"] = "enabled-groups";
  FiltersOption["EnabledFilters"] = "enabled-filters";
  FiltersOption["CustomFilters"] = "custom-filters";
  FiltersOption["UserFilter"] = "user-filter";
  FiltersOption["Allowlist"] = "allowlist";
  return FiltersOption;
}({});
const filtersConfigValidator = lib/* default.object */.ZP.object({
  /**
   * List of IDs of enabled filter groups.
   */
  [FiltersOption.EnabledGroups]: lib/* default.array */.ZP.array(lib/* default.number */.ZP.number().int()),
  /**
   * List of IDs of enabled filters.
   */
  [FiltersOption.EnabledFilters]: lib/* default.array */.ZP.array(lib/* default.number */.ZP.number().int()),
  /**
   * List of objects with information about custom filters.
   */
  [FiltersOption.CustomFilters]: customFiltersConfigValidator,
  /**
   * An object with concatenated user rules and their status - enabled or not.
   */
  [FiltersOption.UserFilter]: userFilterValidator,
  /**
   * Object with the allowlist domains, the inverted allowlist domains and
   * which one applies.
   */
  [FiltersOption.Allowlist]: allowlistValidator
});

/**
 * Contains all information about filters: regular, custom, user filter and
 * allowlist.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/stealth.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


// Stealth configuration

let StealthOption = /*#__PURE__*/function (StealthOption) {
  StealthOption["DisableStealthMode"] = "stealth-disable-stealth-mode";
  StealthOption["HideReferrer"] = "stealth-hide-referrer";
  StealthOption["HideSearchQueries"] = "stealth-hide-search-queries";
  StealthOption["SendDoNotTrack"] = "stealth-send-do-not-track";
  StealthOption["BlockWebRTC"] = "stealth-block-webrtc";
  StealthOption["RemoveXClientData"] = "stealth-remove-x-client";
  StealthOption["SelfDestructThirdPartyCookies"] = "stealth-block-third-party-cookies";
  StealthOption["SelfDestructThirdPartyCookiesTime"] = "stealth-block-third-party-cookies-time";
  StealthOption["SelfDestructFirstPartyCookies"] = "stealth-block-first-party-cookies";
  StealthOption["SelfDestructFirstPartyCookiesTime"] = "stealth-block-first-party-cookies-time";
  StealthOption["BlockKnownTrackers"] = "block-known-trackers";
  StealthOption["StripTrackingParams"] = "strip-tracking-parameters";
  return StealthOption;
}({});
const stealthConfigValidator = lib/* default.object */.ZP.object({
  /**
   * Whether Stealth mode is disabled or not.
   */
  [StealthOption.DisableStealthMode]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Should the application hide the origin referrer in third-party requests
   * by replacing the referrer url with the url from the requested url.
   */
  [StealthOption.HideReferrer]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Should the application hide the original referrer from the search page
   * containing the search query in third-party queries, replacing
   * the referrer url with the url from the requested url.
   */
  [StealthOption.HideSearchQueries]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Includes HTTP headers 'DNT' and 'Sec-GPC' in all requests.
   *
   * @see https://www.wikiwand.com/en/Do_Not_Track
   * @see https://globalprivacycontrol.org
   */
  [StealthOption.SendDoNotTrack]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Blocks the possibility of leaking your IP address through WebRTC, even if
   * you use a proxy server or VPN.
   */
  [StealthOption.BlockWebRTC]: lib/* default.boolean */.ZP.boolean(),
  /**
   * For Google Chrome, it removes the 'X-Client-Data' header from
   * the requests, which contains information about the browser version
   * and modifications.
   */
  [StealthOption.RemoveXClientData]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Whether or not the application should set a fixed lifetime from
   * `StealthOption.SelfDestructThirdPartyCookiesTime` for third-party
   * cookies.
   */
  [StealthOption.SelfDestructThirdPartyCookies]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Time in milliseconds to delete third-party cookies.
   */
  [StealthOption.SelfDestructThirdPartyCookiesTime]: lib/* default.number */.ZP.number(),
  /**
   * Whether or not the application should set a fixed lifetime from
   * `StealthOption.SelfDestructFirstPartyCookiesTime` for first-party
   * cookies.
   */
  [StealthOption.SelfDestructFirstPartyCookies]: lib/* default.boolean */.ZP.boolean(),
  /**
   * Time in milliseconds to delete first-party cookies.
   */
  [StealthOption.SelfDestructFirstPartyCookiesTime]: lib/* default.number */.ZP.number(),
  /**
   * If true application will enable AdGuard Tracking Protection filter
   * {@link AntiBannerFiltersId.TrackingFilterId}.
   */
  [StealthOption.BlockKnownTrackers]: lib/* default.boolean */.ZP.boolean().optional(),
  /**
   * If true application will enable AdGuard URL Tracking filter
   * {@link AntiBannerFiltersId.UrlTrackingFilterId}.
   */
  [StealthOption.StripTrackingParams]: lib/* default.boolean */.ZP.boolean()
});

/**
 * Contains various secure browsing settings: cookie deletion time, privacy
 * headers, referrer hiding, and the ability to enable additional filters.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/main.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */






// Root configuration

const PROTOCOL_VERSION = '2.0';
let RootOption = /*#__PURE__*/function (RootOption) {
  RootOption["ProtocolVersion"] = "protocol-version";
  RootOption["GeneralSettings"] = "general-settings";
  RootOption["ExtensionSpecificSettings"] = "extension-specific-settings";
  RootOption["Filters"] = "filters";
  RootOption["Stealth"] = "stealth";
  return RootOption;
}({});
const configValidator = lib/* default.object */.ZP.object({
  /**
   * Describes the current version of the object. This is necessary to check
   * if we need to migrate from the old settings.
   */
  [RootOption.ProtocolVersion]: lib/* default.literal */.ZP.literal(PROTOCOL_VERSION),
  /**
   * Contains general application settings: appearance theme, language, time
   * to check for updates to filters and some filtering options.
   */
  [RootOption.GeneralSettings]: generalSettingsConfigValidator,
  /**
   * Contains some additional extension settings and UI settings.
   */
  [RootOption.ExtensionSpecificSettings]: extensionSpecificSettingsConfigValidator,
  /**
   * Contains all information about filters: regular, custom, user filter and
   * allowlist.
   */
  [RootOption.Filters]: filtersConfigValidator,
  /**
   * Contains various secure browsing settings: cookie deletion time, privacy
   * headers, referrer hiding, and the ability to enable additional filters.
   */
  [RootOption.Stealth]: stealthConfigValidator.optional()
});

/**
 * This is the root object for exported/imported settings, which contains all
 * the information needed to start the application.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/configuration/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */








;// CONCATENATED MODULE: ./Extension/src/background/schema/preprocessor.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * In some cases we want to preprocessing input before validation
 * For example, cast loaded filter metadata item id field from string to number before validation:
 *
 * { filterId: "1", ... } -> { filterId: 1, ... }.
 */
class SchemaPreprocessor {
  /**
   * If {@link value} is string, cast it to number, else returns original value.
   *
   * @param value Preprocessed value.
   * @returns Number value, if string passed, else returns original value.
   */
  static castStringToNumber(value) {
    if (typeof value === 'string') {
      return Number(JSON.parse(value));
    }
    return value;
  }

  /**
   * If {@link value} is string, cast it to boolean, else returns original value.
   *
   * @param value Preprocessed value.
   * @returns Boolean value, if string passed, else returns original value.
   */
  static castStringToBoolean(value) {
    if (typeof value === 'string') {
      try {
        return Boolean(JSON.parse(value));
      } catch (e) {
        return value;
      }
    }
    return value;
  }
}
/**
 * Runtime {@link zod} validator with {@link SchemaPreprocessor.castStringToBoolean} preprocessor.
 */
SchemaPreprocessor.booleanValidator = lib/* default.preprocess */.ZP.preprocess(SchemaPreprocessor.castStringToBoolean, lib/* default.boolean */.ZP.boolean());
/**
 * Runtime {@link zod} validator with {@link SchemaPreprocessor.castStringToNumber} preprocessor.
 */
SchemaPreprocessor.numberValidator = lib/* default.preprocess */.ZP.preprocess(SchemaPreprocessor.castStringToNumber, lib/* default.number */.ZP.number());
;// CONCATENATED MODULE: ./Extension/src/background/schema/settings/main.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


let SettingOption = /*#__PURE__*/function (SettingOption) {
  SettingOption["AppearanceTheme"] = "appearance-theme";
  SettingOption["DisableShowPageStats"] = "disable-show-page-statistic";
  SettingOption["DisableDetectFilters"] = "detect-filters-disabled";
  SettingOption["DisableSafebrowsing"] = "safebrowsing-disabled";
  SettingOption["FiltersUpdatePeriod"] = "filters-update-period";
  SettingOption["UseOptimizedFilters"] = "use-optimized-filters";
  SettingOption["DisableCollectHits"] = "hits-count-disabled";
  SettingOption["DisableShowContextMenu"] = "context-menu-disabled";
  SettingOption["DisableShowAdguardPromoInfo"] = "show-info-about-adguard-disabled";
  SettingOption["DisableShowAppUpdatedNotification"] = "show-app-updated-disabled";
  SettingOption["HideRateBlock"] = "hide-rate-block";
  SettingOption["UserRulesEditorWrap"] = "user-rules-editor-wrap";
  SettingOption["AllowlistDomains"] = "allowlist-domains";
  SettingOption["InvertedAllowlistDomains"] = "block-list-domains";
  SettingOption["AllowlistEnabled"] = "allowlist-enabled";
  SettingOption["DefaultAllowlistMode"] = "default-allowlist-mode";
  SettingOption["DisableStealthMode"] = "stealth-disable-stealth-mode";
  SettingOption["HideReferrer"] = "stealth-hide-referrer";
  SettingOption["HideSearchQueries"] = "stealth-hide-search-queries";
  SettingOption["SendDoNotTrack"] = "stealth-send-do-not-track";
  SettingOption["RemoveXClientData"] = "stealth-remove-x-client";
  SettingOption["BlockWebRTC"] = "stealth-block-webrtc";
  SettingOption["SelfDestructThirdPartyCookies"] = "stealth-block-third-party-cookies";
  SettingOption["SelfDestructThirdPartyCookiesTime"] = "stealth-block-third-party-cookies-time";
  SettingOption["SelfDestructFirstPartyCookies"] = "stealth-block-first-party-cookies";
  SettingOption["SelfDestructFirstPartyCookiesTime"] = "stealth-block-first-party-cookies-time";
  SettingOption["FiltersState"] = "filters-state";
  SettingOption["FiltersVersion"] = "filters-version";
  SettingOption["GroupsState"] = "groups-state";
  SettingOption["UserFilterEnabled"] = "user-filter-enabled";
  SettingOption["Metadata"] = "filters-metadata";
  SettingOption["I18nMetadata"] = "filters-i18n-metadata";
  SettingOption["CustomFilters"] = "custom-filters";
  SettingOption["DisableFiltering"] = "adguard-disabled";
  return SettingOption;
}({});

// Setting options may be stringified, use preprocessors for correct type casting

const settingsValidator = lib/* default.object */.ZP.object({
  // ----- General settings section -----
  /**
   * See {@link GeneralSettingsConfig[GeneralSettingsOption.AppearanceTheme]}.
   */
  [SettingOption.AppearanceTheme]: lib/* default.enum */.ZP["enum"](['system', 'dark', 'light']),
  /**
   * See {@link GeneralSettingsConfig[GeneralSettingsOption.ShowBlockedAdsCount]}.
   */
  [SettingOption.DisableShowPageStats]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link GeneralSettingsConfig[GeneralSettingsOption.AutodetectFilters]}.
   */
  [SettingOption.DisableDetectFilters]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link GeneralSettingsConfig[GeneralSettingsOption.SafebrowsingEnabled]}.
   */
  [SettingOption.DisableSafebrowsing]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link GeneralSettingsConfig[GeneralSettingsOption.FiltersUpdatePeriod]}.
   */
  [SettingOption.FiltersUpdatePeriod]: SchemaPreprocessor.numberValidator,
  // ----- General settings section -----

  // ----- Extension specific settings section -----
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.UseOptimizedFilters]}.
   */
  [SettingOption.UseOptimizedFilters]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.CollectHitsCount]}.
   */
  [SettingOption.DisableCollectHits]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowContextMenu]}.
   */
  [SettingOption.DisableShowContextMenu]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowInfoAboutAdguard]}.
   */
  [SettingOption.DisableShowAdguardPromoInfo]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.ShowAppUpdatedInfo]}.
   */
  [SettingOption.DisableShowAppUpdatedNotification]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.HideRateAdguard]}.
   */
  [SettingOption.HideRateBlock]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link ExtensionSpecificSettingsConfig[ExtensionSpecificSettingsOption.UserRulesEditorWrap]}.
   */
  [SettingOption.UserRulesEditorWrap]: SchemaPreprocessor.booleanValidator,
  // ----- Extension specific settings section -----

  // ----- Allowlist section -----
  /**
   * See {@link AllowlistConfig[AllowlistOption.Domains]}.
   */
  [SettingOption.AllowlistDomains]: lib/* default.string */.ZP.string(),
  /**
   * See {@link AllowlistConfig[AllowlistOption.InvertedDomains]}.
   */
  [SettingOption.InvertedAllowlistDomains]: lib/* default.string */.ZP.string(),
  /**
   * See {@link AllowlistConfig[AllowlistOption.Enabled]}.
   */
  [SettingOption.AllowlistEnabled]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link AllowlistConfig[AllowlistOption.Inverted]}.
   */
  [SettingOption.DefaultAllowlistMode]: SchemaPreprocessor.booleanValidator,
  // ----- Allowlist section -----

  // ----- Stealth section -----
  /**
   * See {@link StealthConfig[StealthOption.DisableStealthMode]}.
   */
  [SettingOption.DisableStealthMode]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.HideReferrer]}.
   */
  [SettingOption.HideReferrer]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.HideSearchQueries]}.
   */
  [SettingOption.HideSearchQueries]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.SendDoNotTrack]}.
   */
  [SettingOption.SendDoNotTrack]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.BlockWebRTC]}.
   */
  [SettingOption.BlockWebRTC]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.RemoveXClientData]}.
   */
  [SettingOption.RemoveXClientData]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.SelfDestructThirdPartyCookies]}.
   */
  [SettingOption.SelfDestructThirdPartyCookies]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.SelfDestructThirdPartyCookiesTime]}.
   */
  [SettingOption.SelfDestructThirdPartyCookiesTime]: lib/* default.number */.ZP.number(),
  /**
   * See {@link StealthConfig[StealthOption.SelfDestructFirstPartyCookies]}.
   */
  [SettingOption.SelfDestructFirstPartyCookies]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link StealthConfig[StealthOption.SelfDestructFirstPartyCookiesTime]}.
   */
  [SettingOption.SelfDestructFirstPartyCookiesTime]: lib/* default.number */.ZP.number(),
  // ----- Stealth section -----

  // ----- Statuses section -----
  /**
   * See {@link UserFilterConfig[UserFilterOption.Enabled]}.
   */
  [SettingOption.UserFilterEnabled]: SchemaPreprocessor.booleanValidator,
  /**
   * See {@link FilterStateStorageData}.
   */
  [SettingOption.FiltersState]: lib/* default.string */.ZP.string().optional(),
  /**
   * See {@link FilterVersionStorageData}.
   */
  [SettingOption.FiltersVersion]: lib/* default.string */.ZP.string().optional(),
  /**
   * See {@link GroupStateStorageData}.
   */
  [SettingOption.GroupsState]: lib/* default.string */.ZP.string().optional(),
  // ----- Statuses section -----

  // ----- Metadata section -----
  /**
   * See {@link Metadata}.
   */
  [SettingOption.Metadata]: lib/* default.string */.ZP.string().optional(),
  /**
   * See {@link I18nMetadata}.
   */
  [SettingOption.I18nMetadata]: lib/* default.string */.ZP.string().optional(),
  /**
   * See {@link CustomFilterMetadataStorageData}.
   */
  [SettingOption.CustomFilters]: lib/* default.string */.ZP.string().optional(),
  // ----- Metadata section -----

  /**
   * Is filtering enabled or not. Is needed for fast toggling filtering
   * without reload entire extension.
   */
  [SettingOption.DisableFiltering]: SchemaPreprocessor.booleanValidator
});

/**
 * Describes the root flat object with all the settings that are necessary for
 * the application to work and that are stored in the storage.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/settings/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

;// CONCATENATED MODULE: ./Extension/src/background/schema/metadata/filter.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const baseMetadataValidator = lib/* default.object */.ZP.object({
  /**
   * Description of the filter.
   */
  description: lib/* default.string */.ZP.string(),
  /**
   * Display number is used to arrange the filters in the layout.
   */
  displayNumber: lib/* default.number */.ZP.number(),
  /**
   * The time in milliseconds during which the filter content remains fresh
   * and does not need to be updated. Used to auto-renew filters if the user
   * has not selected a custom update period for filters.
   */
  expires: lib/* default.number */.ZP.number(),
  /**
   * Id of the filter.
   */
  filterId: lib/* default.number */.ZP.number(),
  /**
   * Id of the filter's group.
   */
  groupId: lib/* default.number */.ZP.number(),
  /**
   * URL address of the filter's homepage.
   */
  homepage: lib/* default.string */.ZP.string(),
  /**
   * Name of the filter.
   */
  name: lib/* default.string */.ZP.string(),
  /**
   * Filter tags are used to group filters by different characteristics:
   * language, target, platform, etc.
   */
  tags: lib/* default.number */.ZP.number().array(),
  /**
   * Version filter. Supports up to {@link Version.MAX_LENGTH} parts per
   * version.
   */
  version: lib/* default.string */.ZP.string()
});
const regularFilterMetadataValidator = baseMetadataValidator.merge(lib/* default.object */.ZP.object({
  /**
   * Two-letter language codes that are associated with the filter.
   */
  languages: lib/* default.string */.ZP.string().array(),
  /**
   * Timestamp of adding filters in MS.
   * String format, since these values are retrieved from the backend.
   */
  timeAdded: lib/* default.string */.ZP.string(),
  /**
   * When the filter was last updated in milliseconds since the start of
   * the UNIX epoch.
   * String format, since these values are retrieved from the backend.
   */
  timeUpdated: lib/* default.string */.ZP.string(),
  /**
   * The filter subscription URL from which the application retrieved
   * the rules when adding the filter and should retrieve the rules when
   * updating it.
   */
  subscriptionUrl: lib/* default.string */.ZP.string()
}));

/**
 * Filter metadata describes all the metadata (except its contents) of a filter
 * from {@link https://github.com/AdguardTeam/FiltersRegistry the AdGuard filter registry}
 * to work with it.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/metadata/tag.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const tagMetadataValidator = lib/* default.object */.ZP.object({
  /**
   * Id of the tag.
   */
  tagId: lib/* default.number */.ZP.number(),
  /**
   * Tag value, e.g., `lang:en`, `recommended`.
   */
  keyword: lib/* default.string */.ZP.string(),
  /**
   * Description of the tag.
   */
  description: lib/* default.string */.ZP.string().optional(),
  /**
   * Name of the tag.
   */
  name: lib/* default.string */.ZP.string().optional()
});

/**
 * Describes the tag's metadata: ID, name, keyword and display number.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/metadata/group.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const groupMetadataValidator = lib/* default.object */.ZP.object({
  /**
   * Display number is used to arrange the groups in the layout.
   */
  displayNumber: lib/* default.number */.ZP.number(),
  /**
   * Id of the group.
   */
  groupId: lib/* default.number */.ZP.number(),
  /**
   * Name of the group.
   */
  groupName: lib/* default.string */.ZP.string()
});

/**
 * Describes the group's metadata: ID, name and display number.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/metadata/metadata.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */




const metadataValidator = lib/* default.object */.ZP.object({
  /**
   * Array of {@link RegularFilterMetadata}.
   */
  filters: regularFilterMetadataValidator.array(),
  /**
   * Array of {@link GroupMetadata}.
   */
  groups: groupMetadataValidator.array(),
  /**
   * Array of {@link TagMetadata}.
   */
  tags: tagMetadataValidator.array()
});

/**
 * Describes the root object with all filters, groups and tags.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/metadata/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */




;// CONCATENATED MODULE: ./Extension/src/background/schema/i18n-metadata/filter.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const filterInfoValidator = lib/* default.object */.ZP.object({
  /**
   * Description of the filter.
   */
  description: lib/* default.string */.ZP.string(),
  /**
   * Name of the filter.
   */
  name: lib/* default.string */.ZP.string()
});
const regularFilterI18nMetadataValidator = lib/* default.record */.ZP.record(
/**
 * Two-letter language code.
 */
lib/* default.string */.ZP.string(), filterInfoValidator);

/**
 * Describes an object where the language codes are keys and the description and
 * filter name are values.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/i18n-metadata/tag.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const tagInfoValidator = lib/* default.object */.ZP.object({
  /**
   * Description of the tag.
   */
  description: lib/* default.string */.ZP.string(),
  /**
   * Name of the tag.
   */
  name: lib/* default.string */.ZP.string()
});
const tagI18nMetadataValidator = lib/* default.record */.ZP.record(
/**
 * Two-letter language code.
 */
lib/* default.string */.ZP.string(), tagInfoValidator);

/**
 * Describes an object where the language codes are keys and the description and
 * tag name are values.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/i18n-metadata/group.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const groupName = lib/* default.object */.ZP.object({
  /**
   * The name of the filter group.
   */
  name: lib/* default.string */.ZP.string()
});
const groupI18nMetadataValidator = lib/* default.record */.ZP.record(
/**
 * Two-letter language code.
 */
lib/* default.string */.ZP.string(), groupName);

/**
 * Describes an object in which the language codes are keys and the group name
 * is the value.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/i18n-metadata/i18n-metadata.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





const filtersI18nRecordValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, regularFilterI18nMetadataValidator);

/**
 * Describes an object where the language codes are keys and the description and
 * filter name are values.
 */

const groupsI18nRecordValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, groupI18nMetadataValidator);

/**
 * Describes an object in which the language codes are keys and the group name
 * is the value.
 */

const tagsI18nRecordValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, tagI18nMetadataValidator);

/**
 * Describes an object where the language codes are keys and the description and
 * tag name are values.
 */

const i18nMetadataValidator = lib/* default.object */.ZP.object({
  /**
   * Item of {@link FiltersI18n}.
   */
  filters: filtersI18nRecordValidator,
  /**
   * Item of {@link GroupsI18n}.
   */
  groups: groupsI18nRecordValidator,
  /**
   * Item of {@link TagsI18n}.
   */
  tags: tagsI18nRecordValidator
});

/**
 * Describes the root object with translations to all filters, groups and tags.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/i18n-metadata/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */




;// CONCATENATED MODULE: ./Extension/src/background/schema/filter-version/filter-version.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Runtime validator for persistent filter version data.
 */
const filterVersionDataValidator = lib/* default.object */.ZP.object({
  /**
   * Version of filter. Usually consists of 4 parts: 1.2.3.4.
   */
  version: lib/* default.string */.ZP.string(),
  /**
   * Time of the last check by the scheduler: every
   * {@link FilterUpdateService.CHECK_PERIOD_MS period} the time of the last
   * check will be overwritten by the scheduler or if the user clicks
   * the forced update check from the user interface or if the user enabled
   * the filter or group.
   */
  lastCheckTime: lib/* default.number */.ZP.number(),
  /**
   * Time of the last update filter from remote resources.
   */
  lastUpdateTime: lib/* default.number */.ZP.number(),
  /**
   * Property from filter metadata: after how long to check the update.
   */
  expires: lib/* default.number */.ZP.number()
});

/**
 * Describes the filter version and timestamps of the last filter check,
 * update and expiration.
 */

/**
 * Runtime validator for persistent key value storage of filter version data.
 *
 * Key is filter metadata id.
 * Value is {@link FilterVersionData}.
 */
const filterVersionStorageDataValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, filterVersionDataValidator);

/**
 * Describes an object with numeric keys and {@link FilterVersionData}
 * as values.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/filter-version/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Filter version schema entry point

// Filter version validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/filter-state/filter-state.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Runtime validator for persistent filter state data.
 */
const filterStateDataValidator = lib/* default.object */.ZP.object({
  /**
   * Is filter enabled or not.
   */
  enabled: lib/* default.boolean */.ZP.boolean(),
  /**
   * Is filter rules loaded into browser storage or not.
   *
   * TODO: Check if it can be deleted, because we add all filters to
   * the browser storage and this field is always true.
   */
  installed: lib/* default.boolean */.ZP.boolean(),
  /**
   * Is filter loaded.
   *
   * TODO: Check if it can be deleted.
   */
  loaded: lib/* default.boolean */.ZP.boolean()
});

/**
 * Contains boolean flags about the filter status: enabled, installed, loaded.
 */

/**
 * Runtime validator for persistent key value storage of filter state data.
 *
 * Key is filter metadata id.
 * Value is {@link FilterStateData}.
 */
const filterStateStorageDataValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, filterStateDataValidator);

/**
 * Describes an object with numeric keys and filter states as values.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/filter-state/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Filter state schema entry point

// Filter state validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/group-state/group-state.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Runtime validator for persistent group state data.
 */
const groupStateDataValidator = lib/* default.object */.ZP.object({
  /**
   * Is group enabled or not.
   */
  enabled: lib/* default.boolean */.ZP.boolean(),
  /**
   * Whether the group has ever been switched. Can be affected
   * programmatically, e.g. After importing settings.
   */
  touched: lib/* default.boolean */.ZP.boolean()
});

/**
 * Contains boolean flags about the state of the filter group:
 * enabled and touched.
 */

/**
 * Runtime validator for persistent key value storage of group state data.
 *
 * Key is group metadata id.
 * Value is {@link GroupStateData}.
 */
const groupStateStorageDataValidator = lib/* default.record */.ZP.record(SchemaPreprocessor.numberValidator, groupStateDataValidator);

/**
 * Describes an object with numeric keys and group states as values.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/group-state/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Group state schema entry point

// Group state validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/trusted-domains/trusted-domains.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Runtime validator for persistent trusted domains data.
 */
const trustedDomainDataValidator = lib/* default.object */.ZP.object({
  /**
   * String domain which was excluded from filtering.
   */
  domain: lib/* default.string */.ZP.string(),
  /**
   * For what time domain was excluded in milliseconds.
   */
  expires: lib/* default.number */.ZP.number()
});

/**
 * Describes the object with the trusted domain that was excluded from the loc
 * by the $document rules and for how long it was excluded.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/trusted-domains/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


;// CONCATENATED MODULE: ./Extension/src/background/schema/page-stats/page-stats.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Describes the relationship between the number of blocked requests and
 * the name of the group (similar to the tag).
 */
const pageStatsDataItemValidator = lib/* default.record */.ZP.record(lib/* default.string */.ZP.string(), lib/* default.number */.ZP.number());

/**
 * Describes the relationship between the number of blocked requests and
 * the name of the group (similar to the tag).
 */

const pageStatsDataValidator = lib/* default.object */.ZP.object({
  /**
   * Blocked requests grouped by hours.
   */
  hours: pageStatsDataItemValidator.array(),
  /**
   * Blocked requests grouped by days.
   */
  days: pageStatsDataItemValidator.array(),
  /**
   * Blocked requests grouped by months.
   */
  months: pageStatsDataItemValidator.array(),
  /**
   * The time stamp of the last update. In milliseconds.
   */
  updated: lib/* default.number */.ZP.number()
});

/**
 * Describes an object with blocked requests grouped by time and timestamp of
 * the last update.
 */

const pageStatsValidator = lib/* default.object */.ZP.object({
  /**
   * Total blocked requests.
   */
  totalBlocked: lib/* default.number */.ZP.number().optional(),
  /**
   * Blocked requests grouped by time.
   */
  data: pageStatsDataValidator.optional()
});

/**
 * Contains.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/page-stats/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Page stats schema entry point

// page stats validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/hit-stats/hit-stats.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const filterRulesHitsValidator = lib/* default.record */.ZP.record(
/**
 * Text of rule.
 */
lib/* default.string */.ZP.string(),
/**
 * The number of matches of this rule.
 */
lib/* default.number */.ZP.number());
const filterHitsValidator = lib/* default.record */.ZP.record(
/**
 * Filter's id.
 */
lib/* default.string */.ZP.string(), filterRulesHitsValidator.optional());
const hitStatsValidator = lib/* default.object */.ZP.object({
  /**
   * Contains an object with filter IDs as keys and their
   * {@link filterRulesHitsValidator} as values.
   */
  filters: filterHitsValidator.optional()
}).strict();

/**
 * Contains an object 'filters' with filter IDs as keys and their
 * {@link filterRulesHitsValidator} as values or undefined.
 */

const hitStatsStorageDataValidator = lib/* default.object */.ZP.object({
  /**
   * The number of hits in relation to the hit rule.
   */
  stats: hitStatsValidator.optional(),
  /**
   * The total number of hits with no link to the rules.
   */
  totalHits: lib/* default.number */.ZP.number().optional()
}).strict();

/**
 * Contains the number of hits overall and in relation to the hit rule.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/hit-stats/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Hit stats schema entry point

// hit stats validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/custom-filter-metadata/custom-filter-metadata.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const customFilterMetadataValidator = baseMetadataValidator.merge(lib/* default.object */.ZP.object({
  /**
   * The filter subscription URL from which the application retrieved
   * the rules when adding the filter and should retrieve the rules when
   * updating it.
   */
  customUrl: lib/* default.string */.ZP.string(),
  /**
   * If this filter is not trusted - tsurlfilter will not execute JS rules
   * and will not apply header removal rules from this filter.
   * Otherwise, no restrictions.
   */
  trusted: lib/* default.boolean */.ZP.boolean(),
  /**
   * When the filter was last updated in milliseconds since the start of
   * the UNIX epoch.
   */
  timeUpdated: lib/* default.number */.ZP.number(),
  /**
   * Contains MD5 checksum for the filter content.
   */
  checksum: lib/* default.string */.ZP.string().or(lib/* default.null */.ZP["null"]())
}));

/**
 * Contains all information about the custom filter except its contents.
 */

const customFilterMetadataStorageDataValidator = customFilterMetadataValidator.array();

/**
 * Contains a list of custom filter metadata.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/custom-filter-metadata/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

// Custom filter metadata schema entry point

// Custom filter metadata validators and types

;// CONCATENATED MODULE: ./Extension/src/background/schema/local-script-rules/local-script-rules.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const localScriptRulesValidator = lib/* default.object */.ZP.object({
  /**
   * Contains a comment describing the purpose of the local script rules file.
   */
  comment: lib/* default.string */.ZP.string(),
  /**
   * JS rules from all of our filters are pre-assembled into this object to be
   * checked in Firefox AMO to see if they can be executed.
   */
  rules: lib/* default.object */.ZP.object({
    /**
     * Domains in which the rule should be applied.
     */
    domains: lib/* default.string */.ZP.string(),
    /**
     * The text of the script rule.
     */
    script: lib/* default.string */.ZP.string()
  }).array()
}).strict();

/**
 * Describes the structure of the local script rules file, which is necessary
 * for Firefox AMO to check if JS rules can be executed.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/local-script-rules/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

;// CONCATENATED MODULE: ./Extension/src/background/schema/notification/notification-text-record.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const notificationTextRecordValidator = lib/* default.object */.ZP.object({
  /**
   * Notification title.
   */
  title: lib/* default.string */.ZP.string(),
  /**
   * Notification description.
   */
  desc: lib/* default.string */.ZP.string().optional(),
  /**
   * Text for the notification button.
   */
  btn: lib/* default.string */.ZP.string()
}).strict();

/**
 * Describes texts for an notification.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/notification/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


;// CONCATENATED MODULE: ./Extension/src/background/schema/safebrowsing/safebrowsing.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Safebrowsing cache data schema validator.
 */
const safebrowsingCacheDataValidator = lib/* default.object */.ZP.object({
  /**
   * Name of the safebrowsing list.
   */
  list: lib/* default.string */.ZP.string(),
  /**
   * Record expiration time in milliseconds.
   * Optional, because it is not defined for safebrowsing allowlist.
   */
  expires: lib/* default.number */.ZP.number().optional()
}).strict();

/**
 * Safebrowsing cache data type inferred from {@link safebrowsingCacheDataValidator} schema.
 */

/**
 * Safebrowsing persisted storage data schema validator.
 */
const safebrowsingStorageDataValidator = lib/* default.object */.ZP.object({
  /**
   * Resource url hash.
   */
  key: lib/* default.string */.ZP.string(),
  /**
   * Cache data.
   */
  value: safebrowsingCacheDataValidator
}).strict().array();

/**
 * Safebrowsing persisted storage data type inffered from {@link safebrowsingStorageDataValidator} schema.
 */
;// CONCATENATED MODULE: ./Extension/src/background/schema/safebrowsing/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

;// CONCATENATED MODULE: ./Extension/src/background/schema/index.ts
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */
















/***/ }),

/***/ 21059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HB": () => (/* binding */ BACKGROUND_TAB_ID),
/* harmony export */   "OL": () => (/* binding */ FiltersUpdateTime),
/* harmony export */   "Oi": () => (/* binding */ FULLSCREEN_USER_RULES_EDITOR),
/* harmony export */   "Rm": () => (/* binding */ LAST_NOTIFICATION_TIME_KEY),
/* harmony export */   "VC": () => (/* binding */ CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER),
/* harmony export */   "XR": () => (/* binding */ TRUSTED_TAG),
/* harmony export */   "XS": () => (/* binding */ WASTE_CHARACTERS),
/* harmony export */   "Z1": () => (/* binding */ VIEWED_NOTIFICATIONS_KEY),
/* harmony export */   "du": () => (/* binding */ FILTERING_LOG),
/* harmony export */   "ih": () => (/* binding */ CUSTOM_FILTERS_START_ID),
/* harmony export */   "jF": () => (/* binding */ SCHEMA_VERSION_KEY),
/* harmony export */   "jm": () => (/* binding */ TRUSTED_DOCUMENTS_CACHE_KEY),
/* harmony export */   "m6": () => (/* binding */ AntiBannerFiltersId),
/* harmony export */   "mY": () => (/* binding */ PAGE_STATISTIC_KEY),
/* harmony export */   "ni": () => (/* binding */ SB_SUSPENDED_CACHE_KEY),
/* harmony export */   "nn": () => (/* binding */ SCROLLBAR_WIDTH),
/* harmony export */   "o4": () => (/* binding */ HIT_STATISTIC_KEY),
/* harmony export */   "oY": () => (/* binding */ CLIENT_ID_KEY),
/* harmony export */   "q7": () => (/* binding */ APP_VERSION_KEY),
/* harmony export */   "r_": () => (/* binding */ AntibannerGroupsId),
/* harmony export */   "sP": () => (/* binding */ APP_SCHEMA_VERSION),
/* harmony export */   "sg": () => (/* binding */ ADGUARD_SETTINGS_KEY),
/* harmony export */   "uq": () => (/* binding */ NotifierType),
/* harmony export */   "wi": () => (/* binding */ FILTERING_LOG_WINDOW_STATE),
/* harmony export */   "wo": () => (/* binding */ SB_LRU_CACHE_KEY),
/* harmony export */   "zb": () => (/* binding */ NavigationTag)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Current version of app storage data schema.
 *
 * Schema version is used on extension version update.
 *
 * Note: Do not to be confused with the protocol version of the imported config.
 */
const APP_SCHEMA_VERSION = 3;
const CLIENT_ID_KEY = 'client-id';
const APP_VERSION_KEY = 'app-version';
const SCHEMA_VERSION_KEY = 'schema-version';
const ADGUARD_SETTINGS_KEY = 'adguard-settings';
const PAGE_STATISTIC_KEY = 'page-statistic';
const TRUSTED_DOCUMENTS_CACHE_KEY = 'trusted-documents';
const SB_LRU_CACHE_KEY = 'sb-lru-cache';
const SB_SUSPENDED_CACHE_KEY = 'safebrowsing-suspended-from';
const VIEWED_NOTIFICATIONS_KEY = 'viewed-notifications';
const LAST_NOTIFICATION_TIME_KEY = 'viewed-notification-time';
const FILTERING_LOG_WINDOW_STATE = 'filtering-log-window-state';
const HIT_STATISTIC_KEY = 'filters-hit-count';

// Filter ids used in the code on the background page and filtering log page
let AntiBannerFiltersId = /*#__PURE__*/function (AntiBannerFiltersId) {
  AntiBannerFiltersId[AntiBannerFiltersId["StealthModeFilterId"] = -1] = "StealthModeFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["UserFilterId"] = 0] = "UserFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["EnglishFilterId"] = 2] = "EnglishFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["TrackingFilterId"] = 3] = "TrackingFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["SocialFilterId"] = 4] = "SocialFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["SearchAndSelfPromoFilterId"] = 10] = "SearchAndSelfPromoFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["UrlTrackingFilterId"] = 17] = "UrlTrackingFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["AllowlistFilterId"] = 100] = "AllowlistFilterId";
  AntiBannerFiltersId[AntiBannerFiltersId["MobileAdsFilterId"] = 11] = "MobileAdsFilterId";
  return AntiBannerFiltersId;
}({});

// Group ids used in the code on the multiple entry points
let AntibannerGroupsId = /*#__PURE__*/function (AntibannerGroupsId) {
  AntibannerGroupsId[AntibannerGroupsId["AdBlockingGroupId"] = 1] = "AdBlockingGroupId";
  AntibannerGroupsId[AntibannerGroupsId["CustomFilterGroupId"] = 0] = "CustomFilterGroupId";
  AntibannerGroupsId[AntibannerGroupsId["PrivacyFilterGroupId"] = 2] = "PrivacyFilterGroupId";
  AntibannerGroupsId[AntibannerGroupsId["OtherFiltersGroupId"] = 6] = "OtherFiltersGroupId";
  AntibannerGroupsId[AntibannerGroupsId["LanguageFiltersGroupId"] = 7] = "LanguageFiltersGroupId";
  return AntibannerGroupsId;
}({});
let NotifierType = /*#__PURE__*/function (NotifierType) {
  NotifierType["RequestFilterUpdated"] = "event.request.filter.updated";
  NotifierType["userFilterUpdated"] = "event.user.filter.updated";
  NotifierType["UpdateAllowlistFilterRules"] = "event.update.allowlist.filter.rules";
  NotifierType["SettingUpdated"] = "event.update.setting.value";
  NotifierType["FiltersUpdateCheckReady"] = "event.update.filters.check";
  NotifierType["TabAdded"] = "log.tab.added";
  NotifierType["TabClose"] = "log.tab.close";
  NotifierType["TabUpdate"] = "log.tab.update";
  NotifierType["TabReset"] = "log.tab.reset";
  NotifierType["LogEventAdded"] = "log.event.added";
  NotifierType["SettingsUpdated"] = "event.sync.finished";
  NotifierType["FullscreenUserRulesEditorUpdated"] = "event.user.rules.editor.updated";
  return NotifierType;
}({});
const FULLSCREEN_USER_RULES_EDITOR = 'fullscreen_user_rules_editor';
const FILTERING_LOG = 'filtering-log';
let NavigationTag = /*#__PURE__*/function (NavigationTag) {
  NavigationTag["Regular"] = "regular";
  NavigationTag["Party"] = "party";
  return NavigationTag;
}({});

/**
 * Trusted tag for custom filters
 */
const TRUSTED_TAG = 'trusted';

/**
 * Custom filters group display number
 */
const CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER = 99;

/**
 * Custom filters identifiers starts from this number
 *
 * @type {number}
 */
const CUSTOM_FILTERS_START_ID = 1000;

// Unnecessary characters that will be replaced
const WASTE_CHARACTERS = /[.*+?^${}()|[\]\\]/g;

// Custom scrollbar width
const SCROLLBAR_WIDTH = 12;
const BACKGROUND_TAB_ID = -1;

/**
 *  Time interval between filter updates.
 */
let FiltersUpdateTime = /*#__PURE__*/function (FiltersUpdateTime) {
  FiltersUpdateTime[FiltersUpdateTime["Disabled"] = 0] = "Disabled";
  FiltersUpdateTime[FiltersUpdateTime["OneHour"] = 3600000] = "OneHour";
  FiltersUpdateTime[FiltersUpdateTime["SixHours"] = 21600000] = "SixHours";
  FiltersUpdateTime[FiltersUpdateTime["TwelveHours"] = 43200000] = "TwelveHours";
  FiltersUpdateTime[FiltersUpdateTime["TwentyFourHours"] = 86400000] = "TwentyFourHours";
  FiltersUpdateTime[FiltersUpdateTime["FortyEightHours"] = 172800000] = "FortyEightHours";
  FiltersUpdateTime[FiltersUpdateTime["Default"] = -1] = "Default";
  return FiltersUpdateTime;
}({});

/***/ }),

/***/ 65586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getErrorMessage)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Checks if error has message.
 *
 * @param error Error object.
 */
function isErrorWithMessage(error) {
  return typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string';
}

/**
 * Converts error to the error with message.
 *
 * @param maybeError Possible error.
 */
function toErrorWithMessage(maybeError) {
  if (isErrorWithMessage(maybeError)) {
    return maybeError;
  }
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

/**
 * Converts error object to error with message. This method might be helpful to handle thrown errors.
 *
 * @param error Error object.
 *
 * @returns Message of the error.
 */
function getErrorMessage(error) {
  return toErrorWithMessage(error).message;
}

/***/ }),

/***/ 82637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OU": () => (/* binding */ Forward),
/* harmony export */   "UU": () => (/* binding */ ForwardFrom),
/* harmony export */   "xD": () => (/* binding */ ForwardAction)
/* harmony export */ });
/* unused harmony export ForwardApp */
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * IMPORTANT: do not change the values as tds is already configured for that specific strings.
 */
let ForwardAction = /*#__PURE__*/function (ForwardAction) {
  ForwardAction["UninstallExtension"] = "adguard_uninstal_ext";
  ForwardAction["ThankYou"] = "thank_you_page";
  ForwardAction["SiteReport"] = "site_report_page";
  ForwardAction["IssueReport"] = "report";
  ForwardAction["BugReport"] = "bug_report";
  ForwardAction["Privacy"] = "privacy";
  ForwardAction["Acknowledgments"] = "acknowledgments";
  ForwardAction["Github"] = "github_options";
  ForwardAction["Website"] = "adguard_site";
  ForwardAction["Discuss"] = "discuss";
  ForwardAction["Compare"] = "compare";
  ForwardAction["ComparePromo"] = "compare_promo";
  ForwardAction["Changelog"] = "github_version_popup";
  ForwardAction["GlobalPrivacyControl"] = "global_privacy_control";
  ForwardAction["DoNotTrack"] = "do_not_track";
  ForwardAction["HowToCreateRules"] = "userfilter_description";
  ForwardAction["AdguardSite"] = "adguard_site";
  ForwardAction["SelfPromotion"] = "self_promotion";
  ForwardAction["ProtectionWorks"] = "protection_works";
  ForwardAction["CollectHitsLearnMore"] = "filter_rules";
  ForwardAction["OperaStore"] = "opera_store";
  ForwardAction["FirefoxStore"] = "firefox_store";
  ForwardAction["ChromeStore"] = "chrome_store";
  ForwardAction["EdgeStore"] = "edge_store";
  ForwardAction["IOS"] = "ios_about";
  ForwardAction["Android"] = "android_about";
  ForwardAction["GithubVersion"] = "github_version_popup";
  ForwardAction["LearnAboutAdGuard"] = "learn_about_adguard";
  ForwardAction["BackToSchool"] = "back_to_school";
  return ForwardAction;
}({});
let ForwardFrom = /*#__PURE__*/function (ForwardFrom) {
  ForwardFrom["Background"] = "background";
  ForwardFrom["Options"] = "options_screen";
  ForwardFrom["OptionsFooter"] = "options_screen_footer";
  ForwardFrom["ContextMenu"] = "context_menu";
  ForwardFrom["Popup"] = "popup";
  ForwardFrom["Safebrowsing"] = "safebrowsing";
  ForwardFrom["Adblocker"] = "adblocked";
  ForwardFrom["VersionPopup"] = "version_popup";
  return ForwardFrom;
}({});
let ForwardApp = /*#__PURE__*/function (ForwardApp) {
  ForwardApp["BrowserExtension"] = "browser_extension";
  return ForwardApp;
}({});
/**
 * Class for creating forward links
 */
class Forward {
  static get(params) {
    const queryString = Object.entries({
      ...Forward.defaultParams,
      ...params
    }).map(([key, value]) => `${key}=${value}`).join('&');
    return `${Forward.url}?${queryString}`;
  }
}
Forward.url = 'https://link.adtidy.org/forward.html';
Forward.defaultParams = {
  app: ForwardApp.BrowserExtension
};

/***/ }),

/***/ 59948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LK": () => (/* binding */ LogLevelString),
/* harmony export */   "Zb": () => (/* binding */ Log)
/* harmony export */ });
/* unused harmony exports LogLevel, LogMethod */
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93620);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65586);
/**
 * @file
 *
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Number presentation of log levels. Order is important. Higher number, more messages to be visible.
 */
let LogLevel = /*#__PURE__*/function (LogLevel) {
  LogLevel[LogLevel["Error"] = 1] = "Error";
  LogLevel[LogLevel["Warn"] = 2] = "Warn";
  LogLevel[LogLevel["Info"] = 3] = "Info";
  LogLevel[LogLevel["Debug"] = 4] = "Debug";
  return LogLevel;
}({});

/**
 * Methods supported by console. Used to manage levels.
 */
let LogMethod = /*#__PURE__*/function (LogMethod) {
  LogMethod["Log"] = "log";
  LogMethod["Info"] = "info";
  LogMethod["Error"] = "error";
  return LogMethod;
}({});

/**
 * String presentation of log levels, for convenient users usage.
 */
let LogLevelString = /*#__PURE__*/function (LogLevelString) {
  LogLevelString["Error"] = "error";
  LogLevelString["Warn"] = "warn";
  LogLevelString["Info"] = "info";
  LogLevelString["Debug"] = "debug";
  return LogLevelString;
}({});

/**
 * Simple logger with log levels
 */
class Log {
  /**
   * Print debug messages. Usually used for technical information.
   *
   * @param args Printed arguments.
   */
  static debug(...args) {
    Log.print(LogLevel.Debug, LogMethod.Log, args);
  }

  /**
   * Print messages you want to disclose to users.
   *
   * @param args Printed arguments.
   */
  static info(...args) {
    Log.print(LogLevel.Info, LogMethod.Info, args);
  }

  /**
   * Print warn messages.
   *
   * @param args Printed arguments.
   */
  static warn(...args) {
    Log.print(LogLevel.Warn, LogMethod.Info, args);
  }

  /**
   * Print error messages.
   *
   * @param args Printed arguments.
   */
  static error(...args) {
    Log.print(LogLevel.Error, LogMethod.Error, args);
  }

  /**
   * Setter for log level. With this method log level can be updated dynamically.
   *
   * @param logLevel Log level.
   */
  static set currentLevel(logLevel) {
    switch (logLevel) {
      case LogLevelString.Error:
        Log.currentLevelValue = LogLevel.Error;
        break;
      case LogLevelString.Warn:
        Log.currentLevelValue = LogLevel.Warn;
        break;
      case LogLevelString.Info:
        Log.currentLevelValue = LogLevel.Info;
        break;
      case LogLevelString.Debug:
        Log.currentLevelValue = LogLevel.Debug;
        break;
      default:
        throw new Error(`Logger supports only next levels: ${[Object.values(LogLevelString).join(', ')]}`);
    }
  }

  /**
   * Converts error to string.
   *
   * @param error Error to print.
   * @private
   */
  static errorToString(error) {
    const message = (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getErrorMessage */ .e)(error);
    return `${message}\nStack trace:\n${error.stack}`;
  }

  /**
   * Wrapper over log methods.
   *
   * @param level Log level.
   * @param method Log method.
   * @param args
   * @private
   */
  static print(level, method,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args) {
    // check log level
    if (Log.currentLevelValue < level) {
      return;
    }
    if (!args || args.length === 0 || !args[0]) {
      return;
    }
    const formattedArgs = args.map(value => {
      if (value instanceof Error) {
        return Log.errorToString(value);
      }
      if (typeof value.message === 'string') {
        return value.message;
      }
      if (typeof value === 'object') {
        return JSON.stringify(value);
      }
      return String(value);
    });
    const formattedTime = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Date.now(), "yyyy-MM-dd'T'HH:mm:ss:SSS")}:`;

    // eslint-disable-next-line no-console
    console[method](formattedTime, ...formattedArgs);
  }

  /**
   * Exposes logger globally, so user be able to update log level and print more info.
   *
   * @param window DOM Window object.
   */
  static expose(window) {
    var _window$adguard;
    const adguard = (_window$adguard = window.adguard) != null ? _window$adguard : {};
    window.adguard = adguard;
    adguard.Log = Log;
  }
}
Log.currentLevelValue = LogLevel.Info;
Log.expose(window);

/***/ }),

/***/ 50545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ MessageType),
/* harmony export */   "Z": () => (/* binding */ APP_MESSAGE_HANDLER_NAME)
/* harmony export */ });
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Message types used for message passing between extension contexts
 * (popup, filtering log, content scripts, background)
 */

const APP_MESSAGE_HANDLER_NAME = 'app';
let MessageType = /*#__PURE__*/function (MessageType) {
  MessageType["CreateEventListener"] = "createEventListener";
  MessageType["RemoveListener"] = "removeListener";
  MessageType["OpenExtensionStore"] = "openExtensionStore";
  MessageType["AddAndEnableFilter"] = "addAndEnableFilter";
  MessageType["ApplySettingsJson"] = "applySettingsJson";
  MessageType["OpenFilteringLog"] = "openFilteringLog";
  MessageType["OpenFullscreenUserRules"] = "openFullscreenUserRules";
  MessageType["ResetBlockedAdsCount"] = "resetBlockedAdsCount";
  MessageType["ResetSettings"] = "resetSettings";
  MessageType["GetUserRules"] = "getUserRules";
  MessageType["SaveUserRules"] = "saveUserRules";
  MessageType["GetAllowlistDomains"] = "getAllowlistDomains";
  MessageType["SaveAllowlistDomains"] = "saveAllowlistDomains";
  MessageType["CheckFiltersUpdate"] = "checkFiltersUpdate";
  MessageType["DisableFiltersGroup"] = "disableFiltersGroup";
  MessageType["DisableFilter"] = "disableFilter";
  MessageType["LoadCustomFilterInfo"] = "loadCustomFilterInfo";
  MessageType["SubscribeToCustomFilter"] = "subscribeToCustomFilter";
  MessageType["RemoveAntiBannerFilter"] = "removeAntiBannerFilter";
  MessageType["GetTabInfoForPopup"] = "getTabInfoForPopup";
  MessageType["ChangeApplicationFilteringDisabled"] = "changeApplicationFilteringDisabled";
  MessageType["OpenSettingsTab"] = "openSettingsTab";
  MessageType["OpenAssistant"] = "openAssistant";
  MessageType["OpenAbuseTab"] = "openAbuseTab";
  MessageType["OpenSiteReportTab"] = "openSiteReportTab";
  MessageType["OpenComparePage"] = "openComparePage";
  MessageType["ResetCustomRulesForPage"] = "resetCustomRulesForPage";
  MessageType["RemoveAllowlistDomain"] = "removeAllowlistDomainPopup";
  MessageType["AddAllowlistDomainPopup"] = "addAllowlistDomainPopup";
  MessageType["GetStatisticsData"] = "getStatisticsData";
  MessageType["OnOpenFilteringLogPage"] = "onOpenFilteringLogPage";
  MessageType["GetFilteringLogData"] = "getFilteringLogData";
  MessageType["InitializeFrameScript"] = "initializeFrameScript";
  MessageType["OnCloseFilteringLogPage"] = "onCloseFilteringLogPage";
  MessageType["GetFilteringInfoByTabId"] = "getFilteringInfoByTabId";
  MessageType["SynchronizeOpenTabs"] = "synchronizeOpenTabs";
  MessageType["ClearEventsByTabId"] = "clearEventsByTabId";
  MessageType["RefreshPage"] = "refreshPage";
  MessageType["AddUserRule"] = "addUserRule";
  MessageType["RemoveUserRule"] = "removeUserRule";
  MessageType["EnableFiltersGroup"] = "enableFiltersGroup";
  MessageType["NotifyListeners"] = "notifyListeners";
  MessageType["AddLongLivedConnection"] = "addLongLivedConnection";
  MessageType["GetOptionsData"] = "getOptionsData";
  MessageType["ChangeUserSettings"] = "changeUserSetting";
  MessageType["CheckRequestFilterReady"] = "checkRequestFilterReady";
  MessageType["OpenThankyouPage"] = "openThankYouPage";
  MessageType["OpenSafebrowsingTrusted"] = "openSafebrowsingTrusted";
  MessageType["GetSelectorsAndScripts"] = "getSelectorsAndScripts";
  MessageType["CheckPageScriptWrapperRequest"] = "checkPageScriptWrapperRequest";
  MessageType["ProcessShouldCollapse"] = "processShouldCollapse";
  MessageType["ProcessShouldCollapseMany"] = "processShouldCollapseMany";
  MessageType["AddFilteringSubscription"] = "addFilterSubscription";
  MessageType["SetNotificationViewed"] = "setNotificationViewed";
  MessageType["SaveCssHitsStats"] = "saveCssHitStats";
  MessageType["GetCookieRules"] = "getCookieRules";
  MessageType["SaveCookieLogEvent"] = "saveCookieRuleEvent";
  MessageType["LoadSettingsJson"] = "loadSettingsJson";
  MessageType["AddUrlToTrusted"] = "addUrlToTrusted";
  MessageType["SetPreserveLogState"] = "setPreserveLogState";
  MessageType["GetUserRulesEditorData"] = "getUserRulesEditorData";
  MessageType["GetEditorStorageContent"] = "getEditorStorageContent";
  MessageType["SetEditorStorageContent"] = "setEditorStorageContent";
  MessageType["ConvertRulesText"] = "convertRulesText";
  MessageType["SetFilteringLogWindowState"] = "setFilteringLogWindowState";
  MessageType["AppInitialized"] = "appInitialized";
  MessageType["UpdateTotalBlocked"] = "updateTotalBlocked";
  MessageType["ScriptletCloseWindow"] = "scriptletCloseWindow";
  MessageType["ShowAlertPopup"] = "showAlertPopup";
  MessageType["ShowVersionUpdatedPopup"] = "showVersionUpdatedPopup";
  return MessageType;
}({});

/***/ }),

/***/ 23104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "D7": () => (/* reexport safe */ _send_message__WEBPACK_IMPORTED_MODULE_1__.D),
/* harmony export */   "ZA": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "bG": () => (/* reexport safe */ _send_message__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "pF": () => (/* reexport safe */ _message_handler__WEBPACK_IMPORTED_MODULE_2__.p)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50545);
/* harmony import */ var _send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75983);
/* harmony import */ var _message_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





/***/ }),

/***/ 165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MessageHandler)
/* harmony export */ });
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13929);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57851);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63633);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81652);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67515);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68034);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61480);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59027);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35739);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99283);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4473);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90989);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17194);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_13__);













/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * API for handling Messages via {@link browser.runtime.onMessage}
 */
class MessageHandler {
  constructor() {
    this.listeners = new Map();
    this.handleMessage = this.handleMessage.bind(this);
  }
  init() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_13___default().runtime.onMessage.addListener(this.handleMessage);
  }

  /**
   * Add message listener.
   * Listeners limited to 1 per message type to prevent race
   * condition while response processing.
   *
   * TODO: implement listeners priority execution strategy
   *
   * @param type - {@link MessageType}
   * @param listener - {@link MessageListener}
   * @throws error, if message listener already added
   */
  addListener(type, listener) {
    if (this.listeners.has(type)) {
      throw new Error(`Message handler: ${type} listener has already been registered`);
    }
    this.listeners.set(type, listener);
  }

  /**
   * Removes message listener.
   *
   * @param type - {@link MessageType}
   */
  removeListener(type) {
    this.listeners.delete(type);
  }

  /**
   * Removes all listeners
   */
  removeListeners() {
    this.listeners.clear();
  }

  /**
   * Handles data from {@link browser.runtime.onMessage} and match specified listener.
   *
   * @param message - {@link Message}
   * @param sender - An object containing information about the script context that sent a message or request.
   */
}

/***/ }),

/***/ 75983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ sendTabMessage),
/* harmony export */   "b": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50545);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * {@link sendMessage} sends app message via {@link browser.runtime.sendMessage} and
 * gets response from another extension page message handler
 *
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns message handler response
 */
async function sendMessage(message) {
  try {
    return await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__/* .APP_MESSAGE_HANDLER_NAME */ .Z,
      ...message
    });
  } catch (e) {
    // do nothing
  }
}

/**
 * {@link sendTabMessage} sends message to specified tab via {@link browser.tabs.sendMessage} and
 * gets response from it
 *
 * @param tabId - tab id
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns tab message handler response
 */
async function sendTabMessage(tabId, message) {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.sendMessage(tabId, {
    handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__/* .APP_MESSAGE_HANDLER_NAME */ .Z,
    ...message
  });
}

/***/ }),

/***/ 71012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YK": () => (/* binding */ DEFAULT_FILTERS_UPDATE_PERIOD),
/* harmony export */   "eN": () => (/* binding */ DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN),
/* harmony export */   "hJ": () => (/* binding */ AppearanceTheme),
/* harmony export */   "he": () => (/* binding */ defaultSettings),
/* harmony export */   "uj": () => (/* binding */ DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN)
/* harmony export */ });
/* unused harmony exports DEFAULT_ALLOWLIST, DEFAULT_INVERTED_ALLOWLIST */
/* harmony import */ var _background_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51699);
/* harmony import */ var _user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43347);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



let AppearanceTheme = /*#__PURE__*/function (AppearanceTheme) {
  AppearanceTheme["System"] = "system";
  AppearanceTheme["Dark"] = "dark";
  AppearanceTheme["Light"] = "light";
  return AppearanceTheme;
}({});
const DEFAULT_FILTERS_UPDATE_PERIOD = -1;
const DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN = 4320;
const DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN = 2880;
const DEFAULT_ALLOWLIST = [];
const DEFAULT_INVERTED_ALLOWLIST = [];
const defaultSettings = {
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableShowAdguardPromoInfo */ .qY.DisableShowAdguardPromoInfo]: !_user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent.isWindows */ .Z.isWindows && !_user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent.isMacOs */ .Z.isMacOs || _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent.isEdge */ .Z.isEdge,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableSafebrowsing */ .qY.DisableSafebrowsing]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableCollectHits */ .qY.DisableCollectHits]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DefaultAllowlistMode */ .qY.DefaultAllowlistMode]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.AllowlistEnabled */ .qY.AllowlistEnabled]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.UseOptimizedFilters */ .qY.UseOptimizedFilters]: _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent.isAndroid */ .Z.isAndroid,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableDetectFilters */ .qY.DisableDetectFilters]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableShowAppUpdatedNotification */ .qY.DisableShowAppUpdatedNotification]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.FiltersUpdatePeriod */ .qY.FiltersUpdatePeriod]: DEFAULT_FILTERS_UPDATE_PERIOD,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableStealthMode */ .qY.DisableStealthMode]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.HideReferrer */ .qY.HideReferrer]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.HideSearchQueries */ .qY.HideSearchQueries]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.SendDoNotTrack */ .qY.SendDoNotTrack]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.RemoveXClientData */ .qY.RemoveXClientData]: _user_agent__WEBPACK_IMPORTED_MODULE_1__/* .UserAgent.isChrome */ .Z.isChrome,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.BlockWebRTC */ .qY.BlockWebRTC]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.SelfDestructThirdPartyCookies */ .qY.SelfDestructThirdPartyCookies]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.SelfDestructThirdPartyCookiesTime */ .qY.SelfDestructThirdPartyCookiesTime]: DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.SelfDestructFirstPartyCookies */ .qY.SelfDestructFirstPartyCookies]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.SelfDestructFirstPartyCookiesTime */ .qY.SelfDestructFirstPartyCookiesTime]: DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.AppearanceTheme */ .qY.AppearanceTheme]: AppearanceTheme.System,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.UserFilterEnabled */ .qY.UserFilterEnabled]: true,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.HideRateBlock */ .qY.HideRateBlock]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.UserRulesEditorWrap */ .qY.UserRulesEditorWrap]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableFiltering */ .qY.DisableFiltering]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableShowPageStats */ .qY.DisableShowPageStats]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.DisableShowContextMenu */ .qY.DisableShowContextMenu]: false,
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.AllowlistDomains */ .qY.AllowlistDomains]: JSON.stringify(DEFAULT_ALLOWLIST),
  [_background_schema__WEBPACK_IMPORTED_MODULE_0__/* .SettingOption.InvertedAllowlistDomains */ .qY.InvertedAllowlistDomains]: JSON.stringify(DEFAULT_INVERTED_ALLOWLIST)
};

/***/ }),

/***/ 98133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const i18n = {
  getMessage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getMessage),
  getUILanguage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getUILanguage),
  getBaseMessage: key => key,
  // TODO: export 'Locales' type from '@adguard/translate'
  getBaseUILanguage: () => 'en'
};

/***/ }),

/***/ 38647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ reactTranslator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var _adguard_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58396);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98133);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





/**
 * Retrieves localised messages by key, formats and converts into react components or string
 */
const reactTranslator = _adguard_translate__WEBPACK_IMPORTED_MODULE_1__/* .translate.createReactTranslator */ .Iu.createReactTranslator(_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .a, react__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 43347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserAgent)
/* harmony export */ });
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58171);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/**
 * Helper class for user agent data.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API#browser_compatibility
 */
class UserAgent {
  /**
   * Returns current browser name.
   *
   * @returns user agent browser name.
   */
  static getBrowserName() {
    return UserAgent.parser.getBrowser().name;
  }

  /**
   * Check if the current browser is as given.
   *
   * @param browserName Browser Name.
   * @returns true, if current browser has specified name.
   */
  static isTargetBrowser(browserName) {
    return UserAgent.parser.getBrowser().name === browserName;
  }

  /**
   * Check if current platform is as given.
   *
   * @param platformName Platform name.
   * @returns true, if current browser has specified name.
   */
  static isTargetPlatform(platformName) {
    return UserAgent.parser.getOS().name === platformName;
  }

  /**
   * Check if current engine is as given.
   *
   * @param engineName Engine name.
   * @returns true, if current engine has specified name.
   */
  static isTargetEngine(engineName) {
    return UserAgent.parser.getEngine().name === engineName;
  }

  /**
   * Returns a major browser version.
   *
   * @returns browser version number or undefined.
   */
  static getVersion() {
    var _browser$version;
    const browser = this.parser.getBrowser();
    const versionNumber = Number((_browser$version = browser.version) === null || _browser$version === void 0 ? void 0 : _browser$version.split('.')[0]);
    return Number.isNaN(versionNumber) ? undefined : versionNumber;
  }
}
UserAgent.parser = new (ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default())(navigator.userAgent);
UserAgent.version = UserAgent.getVersion();
UserAgent.isChrome = UserAgent.isTargetBrowser('Chrome');
UserAgent.isFirefox = UserAgent.isTargetBrowser('Firefox');
UserAgent.isOpera = UserAgent.isTargetBrowser('Opera');
UserAgent.isYandex = UserAgent.isTargetBrowser('Yandex');
UserAgent.isEdge = UserAgent.isTargetBrowser('Edge');
UserAgent.isEdgeChromium = UserAgent.isEdge && !!(UserAgent.version && UserAgent.version >= 79);
UserAgent.isMacOs = UserAgent.isTargetPlatform('Mac OS');
UserAgent.isWindows = UserAgent.isTargetPlatform('Windows');
UserAgent.isAndroid = UserAgent.isTargetPlatform('Android');
UserAgent.isChromium = UserAgent.isTargetEngine('Blink');
UserAgent.isSupportedBrowser = UserAgent.isChrome && Number(UserAgent.version) >= 79 || UserAgent.isEdgeChromium && Number(UserAgent.version) >= 79 || UserAgent.isFirefox && Number(UserAgent.version) >= 78 || UserAgent.isOpera && Number(UserAgent.version) >= 66;
UserAgent.browserName = UserAgent.getBrowserName();

/***/ }),

/***/ 87235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



const Svg = ({
  id,
  classname,
  title
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  className: classname
}, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: id
}));

/**
 * Wrapper removes animation stuttering and makes icon resetting on animation end smooth
 */
const AnimatedWrapper = ({
  children,
  className
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: className
}, children);
const Icon = ({
  id,
  classname,
  title,
  animationCondition,
  animationClassname
}) => {
  const iconClassname = classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon', classname);
  const icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Svg, {
    id: id,
    classname: iconClassname,
    title: title
  });
  return animationCondition && animationClassname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimatedWrapper, {
    className: animationClassname
  }, icon) : icon;
};

/***/ }),

/***/ 58374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L7": () => (/* binding */ useSelect),
/* harmony export */   "XB": () => (/* binding */ SelectProvider)
/* harmony export */ });
/* unused harmony export SelectContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const noop = () => {};
const SelectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  currentSelect: null,
  setCurrentSelect: noop
});
const SelectProvider = ({
  currentSelect: currentSelectProp = null,
  children
}) => {
  const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentSelectProp);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      currentSelect,
      setCurrentSelect
    };
  }, [currentSelect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContext.Provider, {
    value: context
  }, children);
};
const useSelect = id => {
  const {
    currentSelect,
    setCurrentSelect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SelectContext);
  const hidden = currentSelect !== id;
  const setHidden = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(hide => {
    setCurrentSelect(hide ? null : id);
  }, [setCurrentSelect, id]);
  return [hidden, setHidden];
};

/***/ }),

/***/ 78650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ SelectWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(70846);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Select/SelectProvider.jsx
var SelectProvider = __webpack_require__(58374);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(31479);
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useOutsideFocus.js
var useOutsideFocus = __webpack_require__(40536);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(87235);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(35491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(19532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(48190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(47630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(82563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Select/select.pcss
var Select_select = __webpack_require__(79461);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/select.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Select_select/* default */.Z, options);




       /* harmony default export */ const ui_Select_select = (Select_select/* default */.Z && Select_select/* default.locals */.Z.locals ? Select_select/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/Select.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */







const Select = ({
  id,
  handler,
  options,
  value,
  hidden,
  setHidden,
  popupModification = false
}) => {
  const ref = (0,react.useRef)(null);
  const refList = (0,react.useRef)(null);
  const renderItems = () => options.map(option => {
    const {
      value: currentValue,
      title
    } = option;
    const handleOptionClick = e => {
      e.stopPropagation();
      handler(currentValue);
      setHidden(true);
    };
    return /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "select__item",
      onClick: handleOptionClick,
      key: currentValue,
      value: currentValue
    }, title);
  });
  (0,react.useEffect)(() => {
    return () => {
      setHidden(true);
    };
  }, [setHidden]);
  (0,useOutsideClick/* useOutsideClick */.O)(ref, () => {
    setHidden(true);
  });
  (0,useOutsideFocus/* useOutsideFocus */.W)(refList, () => {
    setHidden(true);
  });
  const handleSelectClick = e => {
    e.stopPropagation();
    setHidden(!hidden);
  };
  const currentValue = options.find(i => i.value === value);
  const currentTitle = currentValue.title;
  return /*#__PURE__*/react.createElement("div", {
    id: id,
    className: classnames_default()('select', popupModification ? 'popup-modification' : ''),
    ref: ref
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "select__value",
    onClick: handleSelectClick
  }, currentTitle), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#select",
    classname: "icon--select select__ico"
  }), !hidden && /*#__PURE__*/react.createElement("div", {
    className: "select__list",
    ref: refList
  }, renderItems(options)));
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/SelectWithContext.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





const SelectWithContext = ({
  id,
  handler,
  options,
  value,
  popupModification = false
}) => {
  const [hidden, setHidden] = (0,SelectProvider/* useSelect */.L7)(id);
  return /*#__PURE__*/react.createElement(Select, {
    id: id,
    handler: handler,
    options: options,
    value: value,
    hidden: hidden,
    setHidden: setHidden,
    popupModification: popupModification
  });
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/SelectWithoutContext.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */




const SelectWithoutContext = ({
  id,
  handler,
  options,
  value,
  popupModification = false
}) => {
  const [hidden, setHidden] = (0,react.useState)(true);
  return /*#__PURE__*/react.createElement(Select, {
    id: id,
    handler: handler,
    options: options,
    value: value,
    hidden: hidden,
    setHidden: setHidden,
    popupModification: popupModification
  });
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/SelectWrapper.jsx
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





const SelectWrapper = ({
  id,
  handler,
  options,
  value,
  // Boolean flag indicating the need to render Select in a popup page with
  // almost the same business logic (useState instead of a hook with
  // Context.Provider), but a different layout: reverse order of icons,
  // smaller text, using all the space of the parent element.
  popupModification,
  withContext
}) => {
  const props = {
    id,
    handler,
    options,
    value,
    popupModification
  };
  return withContext ? /*#__PURE__*/react.createElement(SelectWithContext, props) : /*#__PURE__*/react.createElement(SelectWithoutContext, props);
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Select/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */



/***/ }),

/***/ 79735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dR": () => (/* binding */ MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS),
/* harmony export */   "nD": () => (/* binding */ MIN_USER_RULES_REMOVAL_DISPLAY_DURATION_MS)
/* harmony export */ });
/* unused harmony export HANDLER_DELAY_MS */
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

const MIN_FILTERS_UPDATE_DISPLAY_DURATION_MS = 2000;
const MIN_USER_RULES_REMOVAL_DISPLAY_DURATION_MS = 1500;
const HANDLER_DELAY_MS = 2000; // less time leads to interface freeze

/***/ }),

/***/ 72730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useAppearanceTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49789);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71012);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */




const useAppearanceTheme = appearanceTheme => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const STORAGE_KEY = 'appearance_theme';
    const DARK_THEME_CLASS = 'dark-mode';
    const LIGHT_THEME_CLASS = 'light-mode';
    const SET_TO_STORAGE_TIMEOUT = 500;
    const throttledSetToStorage = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(mode => {
      localStorage.setItem(STORAGE_KEY, mode);
    }, SET_TO_STORAGE_TIMEOUT);
    let theme = appearanceTheme;
    if (!theme) {
      theme = localStorage.getItem(STORAGE_KEY);
    } else {
      throttledSetToStorage(theme);
    }
    switch (theme) {
      case _common_settings__WEBPACK_IMPORTED_MODULE_2__/* .AppearanceTheme.Dark */ .hJ.Dark:
        {
          document.documentElement.classList.add(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
          break;
        }
      case _common_settings__WEBPACK_IMPORTED_MODULE_2__/* .AppearanceTheme.Light */ .hJ.Light:
        {
          document.documentElement.classList.add(LIGHT_THEME_CLASS);
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          break;
        }
      default:
        {
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
        }
    }
  }, [appearanceTheme]);
};

/***/ }),

/***/ 31479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const useOutsideClick = (ref, callback) => {
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, [ref, callback]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, handleClick]);
};

/***/ }),

/***/ 40536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useOutsideFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70846);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */


const useOutsideFocus = (ref, callback) => {
  const handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }, [ref, callback]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [ref, handleFocus]);
};

/***/ }),

/***/ 37916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ messenger)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32380);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59948);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23104);
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */





class Messenger {
  constructor() {
    this.onMessage = (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage);
    /**
     * Creates long lived connections between popup and background page.
     *
     * @param {string} page
     * @param events
     * @param callback
     * @returns {Function}
     */
    this.createLongLivedConnection = (page, events, callback) => {
      const eventListener = (...args) => {
        callback(...args);
      };
      const port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect({
        name: `${page}_${(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .x0)()}`
      });
      port.postMessage({
        type: _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.AddLongLivedConnection */ .Cs.AddLongLivedConnection,
        data: {
          events
        }
      });
      port.onMessage.addListener(message => {
        if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.NotifyListeners */ .Cs.NotifyListeners) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });
      port.onDisconnect.addListener(() => {
        if ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError)) {
          _common_log__WEBPACK_IMPORTED_MODULE_1__/* .Log.error */ .Zb.error((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError.message));
        }
      });
      const onUnload = () => {
        port.disconnect();
      };
      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };
    /**
     * Method subscribes to notifier module events.
     *
     * @param events - list of events to which subscribe
     * @param callback - callback called when event fires
     * @param onUnloadCallback - callback used to remove listener on unload
     * @returns {Promise<function(): Promise<void>>}
     */
    this.createEventListener = async (events, callback, onUnloadCallback) => {
      const eventListener = (...args) => {
        callback(...args);
      };
      let {
        listenerId
      } = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.CreateEventListener */ .Cs.CreateEventListener, {
        events
      });
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener(message => {
        if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.NotifyListeners */ .Cs.NotifyListeners) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });
      const onUnload = async () => {
        if (listenerId) {
          const type = _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.RemoveListener */ .Cs.RemoveListener;
          this.sendMessage(type, {
            listenerId
          });
          listenerId = null;
          if (typeof onUnloadCallback === 'function') {
            onUnloadCallback();
          }
        }
      };
      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };
    this.openExtensionStore = async () => {
      return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenExtensionStore */ .Cs.OpenExtensionStore);
    };
    this.openComparePage = async () => {
      return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenComparePage */ .Cs.OpenComparePage);
    };
    this.resetCustomRulesForPage = this.resetCustomRulesForPage.bind(this);
    this.updateFilters = this.updateFilters.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  async sendMessage(type, data) {
    _common_log__WEBPACK_IMPORTED_MODULE_1__/* .Log.debug */ .Zb.debug('Request type:', type);
    if (data) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .Log.debug */ .Zb.debug('Request data:', data);
    }
    const response = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      handlerName: _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .APP_MESSAGE_HANDLER_NAME */ .ZA,
      type,
      data
    });
    if (response) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .Log.debug */ .Zb.debug('Response type:', type);
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .Log.debug */ .Zb.debug('Response data:', response);
    }
    return response;
  }
  async getOptionsData() {
    const res = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetOptionsData */ .Cs.GetOptionsData);
    return res;
  }
  async changeUserSetting(settingId, value) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ChangeUserSettings */ .Cs.ChangeUserSettings, {
      key: settingId,
      value
    });
  }
  async enableFilter(filterId) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.AddAndEnableFilter */ .Cs.AddAndEnableFilter, {
      filterId
    });
  }
  async disableFilter(filterId) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.DisableFilter */ .Cs.DisableFilter, {
      filterId
    });
  }
  async applySettingsJson(json) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ApplySettingsJson */ .Cs.ApplySettingsJson, {
      json
    });
  }
  async openFilteringLog() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenFilteringLog */ .Cs.OpenFilteringLog);
  }
  async resetStatistics() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ResetBlockedAdsCount */ .Cs.ResetBlockedAdsCount);
  }
  async setFilteringLogWindowState(windowState) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SetFilteringLogWindowState */ .Cs.SetFilteringLogWindowState, {
      windowState
    });
  }
  async resetSettings() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ResetSettings */ .Cs.ResetSettings);
  }
  async getUserRules() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetUserRules */ .Cs.GetUserRules);
  }
  async saveUserRules(value) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SaveUserRules */ .Cs.SaveUserRules, {
      value
    });
  }
  async getAllowlist() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetAllowlistDomains */ .Cs.GetAllowlistDomains);
  }
  async saveAllowlist(value) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SaveAllowlistDomains */ .Cs.SaveAllowlistDomains, {
      value
    });
  }
  async updateFilters() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.CheckFiltersUpdate */ .Cs.CheckFiltersUpdate);
  }
  async updateGroupStatus(id, data) {
    const type = data ? _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.EnableFiltersGroup */ .Cs.EnableFiltersGroup : _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.DisableFiltersGroup */ .Cs.DisableFiltersGroup;
    const groupId = id - 0;
    await this.sendMessage(type, {
      groupId
    });
  }
  async updateFilterStatus(filterId, data) {
    const type = data ? _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.AddAndEnableFilter */ .Cs.AddAndEnableFilter : _common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.DisableFilter */ .Cs.DisableFilter;
    await this.sendMessage(type, {
      filterId
    });
  }
  async checkCustomUrl(url) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.LoadCustomFilterInfo */ .Cs.LoadCustomFilterInfo, {
      url
    });
  }
  async addCustomFilter(filter) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SubscribeToCustomFilter */ .Cs.SubscribeToCustomFilter, {
      filter
    });
  }
  async removeCustomFilter(filterId) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.RemoveAntiBannerFilter */ .Cs.RemoveAntiBannerFilter, {
      filterId
    });
  }
  async getTabInfoForPopup(tabId) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetTabInfoForPopup */ .Cs.GetTabInfoForPopup, {
      tabId
    });
  }
  async changeApplicationFilteringDisabled(state) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ChangeApplicationFilteringDisabled */ .Cs.ChangeApplicationFilteringDisabled, {
      state
    });
  }
  async openSettingsTab() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenSettingsTab */ .Cs.OpenSettingsTab);
  }
  async openAssistant() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenAssistant */ .Cs.OpenAssistant);
  }
  async openAbuseSite(url, from) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenAbuseTab */ .Cs.OpenAbuseTab, {
      url,
      from
    });
  }
  async checkSiteSecurity(url, from) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OpenSiteReportTab */ .Cs.OpenSiteReportTab, {
      url,
      from
    });
  }
  async resetCustomRulesForPage(url) {
    const [currentTab] = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.query({
      active: true,
      currentWindow: true
    });
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ResetCustomRulesForPage */ .Cs.ResetCustomRulesForPage, {
      url,
      tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id
    });
  }
  async removeAllowlistDomain(tabId, tabRefresh) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.RemoveAllowlistDomain */ .Cs.RemoveAllowlistDomain, {
      tabId,
      tabRefresh
    });
  }
  async addAllowlistDomain(tabId) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.AddAllowlistDomainPopup */ .Cs.AddAllowlistDomainPopup, {
      tabId
    });
  }
  async getStatisticsData() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetStatisticsData */ .Cs.GetStatisticsData);
  }
  async onOpenFilteringLogPage() {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OnOpenFilteringLogPage */ .Cs.OnOpenFilteringLogPage);
  }
  async getFilteringLogData() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetFilteringLogData */ .Cs.GetFilteringLogData);
  }
  async onCloseFilteringLogPage() {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.OnCloseFilteringLogPage */ .Cs.OnCloseFilteringLogPage);
  }
  async getFilteringInfoByTabId(tabId) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetFilteringInfoByTabId */ .Cs.GetFilteringInfoByTabId, {
      tabId
    });
  }
  async synchronizeOpenTabs() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SynchronizeOpenTabs */ .Cs.SynchronizeOpenTabs);
  }
  async clearEventsByTabId(tabId, ignorePreserveLog) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ClearEventsByTabId */ .Cs.ClearEventsByTabId, {
      tabId,
      ignorePreserveLog
    });
  }
  async refreshPage(tabId, preserveLogEnabled) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.RefreshPage */ .Cs.RefreshPage, {
      tabId,
      preserveLogEnabled
    });
  }
  async addUserRule(ruleText) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.AddUserRule */ .Cs.AddUserRule, {
      ruleText
    });
  }
  async removeUserRule(ruleText) {
    await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.RemoveUserRule */ .Cs.RemoveUserRule, {
      ruleText
    });
  }
  async setPreserveLogState(state) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SetPreserveLogState */ .Cs.SetPreserveLogState, {
      state
    });
  }
  async getEditorStorageContent() {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.GetEditorStorageContent */ .Cs.GetEditorStorageContent);
  }
  async setEditorStorageContent(content) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.SetEditorStorageContent */ .Cs.SetEditorStorageContent, {
      content
    });
  }
  async convertRuleText(content) {
    return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__/* .MessageType.ConvertRulesText */ .Cs.ConvertRulesText, {
      content
    });
  }
}
const messenger = new Messenger();


/***/ }),

/***/ 79461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".select {\n    display: inline-block;\n    position: relative;\n}\n\n    .select__value {\n        font-weight: 500;\n        white-space: nowrap;\n        font-size: 16px;\n        -moz-text-align-last: right;\n             text-align-last: right;\n        color: var(--gray-base);\n        padding-right: 25px;\n        cursor: pointer;\n        border: 0;\n        background-color: transparent;\n        -webkit-appearance: none;\n    }\n\n    @media (color-index: 48) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__value {\n            color: var(--gray300)\n    }\n        }\n\n    .select__ico {\n        position: absolute;\n        pointer-events: none;\n        right: 5px;\n        top: calc(50% - 4px);\n    }\n\n    .select__list {\n        position: absolute;\n        right: 0;\n        z-index: 10;\n        border: 1px solid var(--gray700);\n        border-radius: 4px;\n        max-height: 265px;\n        min-width: 160px;\n        max-width: 220px;\n        overflow-y: auto;\n        box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.1);\n        margin: 13px 0 0 0;\n        background-color: var(--white);\n        scrollbar-width: thin;\n    }\n\n    @media (color-index: 48) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__list {\n            background-color: var(--black)\n    }\n        }\n\n    .select__list[hidden] {\n            display: none;\n        }\n\n    .select__list::-webkit-scrollbar {\n            width: 4px;\n        }\n\n    .select__list::-webkit-scrollbar-thumb {\n            border-radius: 0;\n            background-color: var(--gray700);\n        }\n\n    .select__item {\n        font-size: 15px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        padding: 16px 25px;\n        cursor: pointer;\n        border: 0;\n        background-color: transparent;\n        color: var(--gray900);\n        width: 100%;\n        text-align: left;\n    }\n\n    .select__item.focus-visible {\n            outline: none;\n            box-shadow: inset 0 0 0 2px var(--outline);\n        }\n\n    .select__item:focus-visible {\n            outline: none;\n            box-shadow: inset 0 0 0 2px var(--outline);\n        }\n\n    @media (color-index: 48) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__item {\n            color: var(--gray300)\n    }\n        }\n\n    .select__item:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .select__item:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    /* Reverse order of icon, smaller text, using full space of parent element */\n\n    .select.popup-modification {\n        width: 100%;\n        height: 100%;\n        display: flex;\n    }\n\n    .select.popup-modification .select__ico {\n            position: absolute;\n            pointer-events: none;\n            left: 5px;\n            top: calc(50% - 4px);\n        }\n\n    .select.popup-modification .select__value {\n            width: 100%;\n            font-size: 12px;\n            -moz-text-align-last: left;\n                 text-align-last: left;\n            padding-left: 25px;\n        }\n\n    .select.popup-modification .select__list {\n            left: 0;\n            right: auto;\n            right: initial;\n        }\n\n.light-mode .select__value {\n            color: var(--gray-base);\n        }\n\n.light-mode .select__list {\n            background-color: var(--white);\n        }\n\n.light-mode .select__item {\n            color: var(--gray900);\n        }\n\n.light-mode .select__item:hover {\n                background-color: var(--gray100);\n                color: var(--gray900);\n            }\n\n.dark-mode .select__value {\n            color: var(--gray300);\n        }\n\n.dark-mode .select__list {\n            background-color: var(--black);\n        }\n\n.dark-mode .select__item {\n            color: var(--gray300);\n        }\n\n.dark-mode .select__item:hover {\n                background-color: var(--gray900);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto Flex';\n    src: url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2 supports variations'),\n       url('../../../../assets/fonts/Roboto-Flex-Regular.woff2') format('woff2-variations');\n    font-weight: 100 1000;\n    font-stretch: 25% 151%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    /*GRAYSCALE*/\n    --white: #ffffff;\n    --gray100: #f3f3f3;\n    --gray300: #d8d8d8;\n    --gray400: #a4a4a4;\n    --gray700: #888888;\n    --gray900: #4d4d4d;\n    --grayDark: #2a2a2a;\n    --black: #131313;\n    /*FEEDBACK*/\n    --red300: #bf4829;\n    --red400: #c23814;\n    --orange400: #eb9300;\n    /*BRAND*/\n    --green400: #67b279;\n    --green700: #4d995f;\n    /*ADDITIONAL*/\n    --purple400: #b267a0;\n    --purple700: #994d87;\n    --slateblue400: #677bb2;\n    --slateblue700: #4d6199;\n    --outline: #005ecc;\n    /*EDITOR*/\n    --green-editor: #338033;\n    --yellow-editor500: #ffff00;\n    --blue-selection: rgb(181, 213, 255);\n    /* - dark mode*/\n    --cyan-editor: #4093d6;\n    --yellow-editor: #dbdb84;\n    --pink-editor: #c46cbd;\n    --orange-editor: #cf8263;\n    --blueDark-editor: #264f78;\n    /* - light mode*/\n    --blue-editor: #4141e2;\n    --brown-editor: #795e26;\n    --purple-editor: #9e45b4;\n    --red-editor: #a31515;\n    /*FILTERING-LOG*/\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n    /*GRADIENTS*/\n}\n    /*FILTERING-LOG-DARK*/\n    @media (color-index: 48) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    @media (color: 48842621) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    @media (prefers-color-scheme: dark) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n        --blue-selection: #556a86;\n        --outline: #99c9ff;\n}\n    }\n    :root {\n\n    --switch-btn-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    --swamp: #547b88;\n    --switch-field-enabled: linear-gradient(90deg, #67B279 0%, #39774C 100%);\n    --switch-field-disabled: linear-gradient(90deg, #732613 0%, #BF4829 100%);\n\n    --greyf7: #f7f7f7;\n    --gray05: rgba(239, 239, 239, 0.5);\n    --greye7: #e7e7e7;\n    --gey6a: #d1d1d1;\n    --grayd8: var(--gray700);\n    --grey78: #787878;\n    --gray-base: var(--gray900);\n    --gray4a: #4a4a4a;\n    --gray88: var(--gray700);\n    --green74: #66b574;\n    --green86: #68bc86;\n    --green75: #5ba575;\n    --red23: #F66F23;\n    --t3: 0.3s ease;\n    --overlay-gray: rgba(137, 137, 137, 0.5);\n    --light-shadow: rgba(0, 0, 0, 0.05);\n    --sidebar-transition: 0.3s ease;\n    --z-idx5: 5;\n    --z-idx6: 6;\n    --z-idx7: 7;\n    --z-idx8: 8;\n}\n\n.dark-mode {\n    --regular-row-hover: #2f2f2f;\n    --regular-row-active: #3b3b3b;\n    --red-row: #46231a;\n    --red-row-hover: #692d1e;\n    --red-row-active: #7a3320;\n    --green-row: #2c4332;\n    --green-row-hover: #3d6246;\n    --green-row-active: #457250;\n    --orange-row: #4d350d;\n    --orange-row-hover: #61410B;\n    --orange-row-active: #744c0a;\n    --blue-selection: #556a86;\n    --outline: #99c9ff;\n}\n\n.light-mode {\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n    --blue-selection: rgb(181, 213, 255);\n    --outline: #005ecc;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".actions {\n    background-color: transparent;\n    border: 0;\n    height: 168px;\n    padding-top: 9px;\n    padding-bottom: 9px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    max-width: 320px;\n}\n\n    @media (color-index: 48) {.actions {\n        background-color: var(--black)\n}\n    }\n\n    @media (color: 48842621) {.actions {\n        background-color: var(--black)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.actions {\n        background-color: var(--black)\n}\n    }\n\n    .actions .action {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 0 20px;\n        cursor: pointer;\n        transition: 0.3s ease background-color;\n        height: 35px;\n    }\n\n    .actions .action:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .actions .action:hover {\n                background-color: var(--grayDark)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .actions .action:hover {\n                background-color: var(--grayDark)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .actions .action:hover {\n                background-color: var(--grayDark)\n        }\n            }\n\n    .actions .action_disabled {\n            cursor: auto;\n            cursor: initial;\n            opacity: 0.5;\n        }\n\n    .actions .action_disabled:hover {\n                background-color: inherit;\n            }\n\n    .actions .action .action-title {\n            padding-left: 15px;\n            font-size: 13px;\n            color: var(--gray900);\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            max-width: 100%;\n        }\n\n    @media (color-index: 48) {\n\n    .actions .action .action-title {\n                color: var(--gray300)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .actions .action .action-title {\n                color: var(--gray300)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .actions .action .action-title {\n                color: var(--gray300)\n        }\n            }\n\n.light-mode .actions {\n        background-color: var(--white);\n    }\n\n.light-mode .actions .action:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .actions .action .action-title {\n                color: var(--gray900);\n            }\n\n.dark-mode .actions {\n        background-color: var(--black);\n    }\n\n.dark-mode .actions .action:hover {\n                background-color: var(--grayDark);\n            }\n\n.dark-mode .actions .action .action-title {\n                color: var(--gray300);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n    margin-top: auto;\n    display: flex;\n    align-items: center;\n    height: 40px;\n    padding: 0 12px 0 16px;\n    font-size: 13px;\n    color: var(--gray900);\n    background-color: var(--gray100);\n}\n\n    @media (color-index: 48) {.footer {\n        color: var(--gray300);\n        background-color: var(--gray900)\n}\n    }\n\n    @media (color: 48842621) {.footer {\n        color: var(--gray300);\n        background-color: var(--gray900)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.footer {\n        color: var(--gray300);\n        background-color: var(--gray900)\n}\n    }\n\n    .footer__text {\n        max-width: 215px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n\n    .footer__platforms {\n        flex-grow: 1;\n        flex-shrink: 0;\n        text-align: right;\n    }\n\n    .footer__link {\n        margin-left: 10px;\n    }\n\n    .footer__icon {\n        width: 24px;\n        height: 24px;\n        color: var(--gray300);\n        transition: 0.3s ease color;\n    }\n\n    @media (color-index: 48) {\n\n    .footer__icon {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .footer__icon {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .footer__icon {\n            color: var(--gray400)\n    }\n        }\n\n    .footer__icon:hover {\n            color: var(--gray700);\n        }\n\n    @media (color-index: 48) {\n\n    .footer__icon:hover {\n                color: var(--gray300)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .footer__icon:hover {\n                color: var(--gray300)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .footer__icon:hover {\n                color: var(--gray300)\n        }\n            }\n\n.light-mode .footer {\n        color: var(--gray900);\n        background-color: var(--gray100);\n    }\n\n.light-mode .footer__icon {\n            color: var(--gray300);\n        }\n\n.light-mode .footer__icon:hover {\n                color: var(--gray700);\n            }\n\n.dark-mode .footer {\n        color: var(--gray300);\n        background-color: var(--gray900);\n    }\n\n.dark-mode .footer__icon {\n            color: var(--gray400);\n        }\n\n.dark-mode .footer__icon:hover {\n                color: var(--gray300)\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 69091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 50px;\n    padding: 0 16px;\n}\n\n    @media (color-index: 48) {.popup-header {\n        background-color: var(--black)\n}\n    }\n\n    @media (color: 48842621) {.popup-header {\n        background-color: var(--black)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.popup-header {\n        background-color: var(--black)\n}\n    }\n\n    .popup-header__logo {\n        width: 113px;\n        height: 25px;\n    }\n\n    .popup-header__buttons {\n        display: flex;\n    }\n\n    .popup-header__button {\n        width: 24px;\n        height: 24px;\n        margin: 0 8px;\n        padding: 0;\n        border-radius: 4px;\n        color: var(--gray400);\n        transition: var(--t3) color, var(--t3) background-color;\n    }\n\n    @media (color-index: 48) {\n\n    .popup-header__button {\n            color: var(--gray700)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .popup-header__button {\n            color: var(--gray700)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .popup-header__button {\n            color: var(--gray700)\n    }\n        }\n\n    .popup-header__button:hover {\n            color: var(--gray700);\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .popup-header__button:hover {\n                background-color: var(--gray900);\n                color: var(--gray400)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .popup-header__button:hover {\n                background-color: var(--gray900);\n                color: var(--gray400)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .popup-header__button:hover {\n                background-color: var(--gray900);\n                color: var(--gray400)\n        }\n            }\n\n@keyframes spin {\n    0% {transform: rotate(0)}\n    100% {transform: rotate(360deg)}\n}\n\n.light-mode .popup-header {\n        background-color: var(--white);\n    }\n\n.light-mode .popup-header__button {\n            color: var(--gray400);\n        }\n\n.light-mode .popup-header__button:hover {\n                background-color: var(--gray100);\n                color: var(--gray700);\n            }\n\n.dark-mode .popup-header {\n        background-color: var(--black);\n    }\n\n.dark-mode .popup-header__button {\n            color: var(--gray700);\n        }\n\n.dark-mode .popup-header__button:hover {\n                background-color: var(--gray900);\n                color: var(--gray400);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 21936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 300px;\n    color: var(--gray900);\n}\n\n    @media (color-index: 48) {.main {\n        color: var(--gray300)\n}\n    }\n\n    @media (color: 48842621) {.main {\n        color: var(--gray300)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.main {\n        color: var(--gray300)\n}\n    }\n\n    .main__header {\n        min-height: 75px;\n    }\n\n    .main__cta-link {\n        text-align: center;\n        font-size: 12px;\n        color: var(--gray700);\n        transition: var(--t3) color;\n    }\n\n    @media (color-index: 48) {\n\n    .main__cta-link {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .main__cta-link {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .main__cta-link {\n            color: var(--gray400)\n    }\n        }\n\n    .main__cta-link:hover {\n            color: var(--gray900);\n        }\n\n    @media (color-index: 48) {\n\n    .main__cta-link:hover {\n                color: var(--gray100)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .main__cta-link:hover {\n                color: var(--gray100)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .main__cta-link:hover {\n                color: var(--gray100)\n        }\n            }\n\n    .main__total-blocked-tab {\n        font-weight: bold;\n        text-align: center;\n        font-size: 24px;\n    }\n\n    .main__total-blocked-all {\n        text-align: center;\n        font-size: 16px;\n    }\n\n    .main .current-site {\n        padding-bottom: 2px;\n        font-size: 16px;\n        max-width: 260px;\n        text-align: center;\n        margin: 0 auto;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        font-weight: bold;\n    }\n\n    .main .current-status {\n        font-size: 14px;\n        text-align: center;\n        max-width: 280px;\n    }\n\n    .main--allowlisted .switcher {\n            opacity: 1;\n        }\n\n    .main--allowlisted .switcher__btn {\n                right: 36px;\n            }\n\n    .main--allowlisted .switcher__btn .switcher__icon--play {\n                    display: none;\n                }\n\n    .main--allowlisted .switcher__btn .switcher__icon--checkmark {\n                    display: none;\n                }\n\n    .main--allowlisted .switcher__btn .switcher__icon--circle {\n                    display: block;\n                }\n\n    .main--disabled .switcher {\n            opacity: 1;\n        }\n\n    .main--disabled .switcher__center {\n                opacity: 0;\n            }\n\n    .main--disabled .switcher__btn {\n                right: 18px;\n            }\n\n    .main--disabled .switcher__btn .switcher__icon--play {\n                    display: block;\n                }\n\n    .main--disabled .switcher__btn .switcher__icon--checkmark {\n                    display: none;\n                }\n\n    .main--disabled .switcher__btn .switcher__icon--circle {\n                    display: none;\n                }\n\n    .main--enabled .switcher, .main--unavailable .switcher, .main--in-exception .switcher {\n            opacity: 1;\n        }\n\n    .main--unavailable .switcher {\n            pointer-events: none;\n        }\n\n    .main--unavailable .switcher__center {\n                opacity: 0;\n            }\n\n    .main--unavailable .switcher__btn {\n                right: 18px;\n            }\n\n    .main--in-exception .switcher {\n            cursor: default;\n        }\n\n    .main--in-exception .switcher:hover .switcher__btn {\n                    transform: none;\n                }\n\n    .main--in-exception .switcher__btn {\n                cursor: default;\n                right: 22px;\n            }\n\n    .main--in-exception .switcher__btn:before {\n                    display: none;\n                }\n\n    .main--in-exception .switcher .switcher__icon--checkmark {\n                display: none;\n            }\n\n    .main--in-exception .switcher .switcher__icon--exclamation {\n                display: block;\n            }\n\n.switcher {\n    opacity: 0;\n    position: relative;\n    cursor: pointer;\n    height: 80px;\n    padding: 0 5px;\n}\n\n.switcher__info {\n        padding-top: 35px;\n    }\n\n.switcher__center {\n        width: 80px;\n        height: 30px;\n        border-radius: 100px;\n    }\n\n.switcher__center--enabled {\n            background-image: var(--switch-field-enabled);\n        }\n\n.switcher__center--allowlisted {\n            background-image: var(--switch-field-disabled);\n        }\n\n.switcher__btn {\n        position: absolute;\n        width: 50px;\n        height: 50px;\n        right: 5px;\n        top: 15px;\n        border-radius: 50%;\n        box-shadow: var(--switch-btn-shadow);\n        background-color: var(--white);\n        padding: 4px;\n        cursor: pointer;\n        transition: var(--t3) box-shadow;\n    }\n\n.switcher__btn:before {\n            content: '';\n            display: block;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;\n            background-color: var(--white);\n        }\n\n.switcher:hover .switcher__btn {\n            box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.1);\n        }\n\n@media (color-index: 48) {\n\n.switcher:hover .switcher__btn {\n                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2)\n        }\n            }\n\n@media (color: 48842621) {\n\n.switcher:hover .switcher__btn {\n                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2)\n        }\n            }\n\n@media (prefers-color-scheme: dark) {\n\n.switcher:hover .switcher__btn {\n                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2)\n        }\n            }\n\n.switcher__icon {\n        position: absolute;\n        left: 13px;\n        top: 13px;\n    }\n\n.switcher__icon--play {\n            display: none;\n        }\n\n.switcher__icon--circle {\n            display: none;\n        }\n\n.switcher__icon--checkmark {\n            display: block;\n        }\n\n.switcher__icon--exclamation {\n            display: none;\n            left: calc(50% - 2px);\n            top: 14px;\n        }\n\n.switcher__icon--cross {\n            color: var(--white);\n            display: none;\n            left: 17px;\n            top: 17px;\n        }\n\n.light-mode .main {\n        color: var(--gray900);\n    }\n\n.light-mode .main__cta-link {\n            color: var(--gray700);\n        }\n\n.light-mode .main__cta-link:hover {\n                color: var(--gray900);\n            }\n\n.light-mode .switcher:hover .switcher__btn {\n                box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.1);\n            }\n\n.dark-mode .main {\n        color: var(--gray300);\n    }\n\n.dark-mode .main__cta-link {\n            color: var(--gray400);\n        }\n\n.dark-mode .main__cta-link:hover {\n                color: var(--gray100);\n            }\n\n.dark-mode .switcher:hover .switcher__btn {\n                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container {\n    height: 300px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n    height: 100%;\n    min-height: 600px;\n    overflow: hidden;\n    display: flex;\n    justify-content: flex-start;\n    align-items: stretch;\n    flex-direction: column;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 60384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chart .tick text {\n        fill: var(--gray700);\n    }\n\n        @media (color-index: 48) {.chart .tick text {\n            fill: var(--gray300)\n    }\n        }\n\n        @media (color: 48842621) {.chart .tick text {\n            fill: var(--gray300)\n    }\n        }\n\n        @media (prefers-color-scheme: dark) {.chart .tick text {\n            fill: var(--gray300)\n    }\n        }\n    .chart .c3-line-data1 {\n        stroke-width: 4px;\n    }\n    .chart .c3-axis line,\n        .chart .c3-axis path {\n            stroke: rgba(0, 0, 0, 0);\n        }\n    .chart__tooltip {\n        font-size: 13px;\n        position: relative;\n        padding: 10px 20px;\n        font-weight: 500;\n        color: #fff;\n        border-radius: 8px;\n        background-color: var(--gray400);\n        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));\n    }\n    .chart__tooltip:before {\n        content: \"\";\n        top: 99%;\n        left: 50%;\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border: solid transparent;\n        border-color: rgba(255, 255, 255, 0);\n        border-top-color: var(--gray400);\n        border-width: 8px;\n        margin-left: -8px;\n    }\n\n\n.light-mode .tick text {\n        fill: var(--gray700);\n    }\n\n.dark-mode .tick text {\n        fill: var(--gray300);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stats-chart {\n    height: 100%;\n}\n\n    .stats-chart__filters {\n        padding: 10px 10px 27px 10px;\n        display: flex;\n        justify-content: space-between;\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stats {\n    padding: 24px 20px 9px;\n}\n\n    .stats__list {\n        font-size: 13px;\n    }\n\n    .stats__item {\n        padding: 0;\n        list-style: none;\n        margin: 0 0 15px;\n        display: flex;\n    }\n\n    .stats__name {\n        outline: none;\n        color: rgba(34, 34, 34, 0.58);\n    }\n\n    @media (color-index: 48) {\n\n    .stats__name {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .stats__name {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .stats__name {\n            color: var(--gray300)\n    }\n        }\n\n    .stats__value {\n        outline: none;\n        margin-left: auto;\n        font-weight: 600;\n        color: var(--gray900);\n    }\n\n    @media (color-index: 48) {\n\n    .stats__value {\n            color: var(--grayd8)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .stats__value {\n            color: var(--grayd8)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .stats__value {\n            color: var(--grayd8)\n    }\n        }\n\n.light-mode .stats__name {\n            color: rgba(34, 34, 34, 0.58);\n        }\n\n.light-mode .stats__value {\n            color: var(--gray900);\n        }\n\n.dark-mode .stats__name {\n            color: var(--gray300);\n        }\n\n.dark-mode .stats__value {\n            color: var(--grayd8);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tabs__panel {\n        display: flex;\n        max-width: 288px;\n        padding: 4px;\n        border-radius: 12px;\n        margin: 0 auto;\n        background-color: var(--gray100);\n        overflow: hidden;\n    }\n\n        @media (color-index: 48) {.tabs__panel {\n            background: var(--gray900)\n    }\n        }\n\n        @media (color: 48842621) {.tabs__panel {\n            background: var(--gray900)\n    }\n        }\n\n        @media (prefers-color-scheme: dark) {.tabs__panel {\n            background: var(--gray900)\n    }\n        }\n    .tabs__content {\n        height: 168px;\n        overflow: auto;\n        scrollbar-width: thin;\n    }\n    .tabs__content::-webkit-scrollbar {\n            width: 12px;\n        }\n    .tabs__content::-webkit-scrollbar-track {\n            background: var(--gray100);\n        }\n    @media (color-index: 48) {\n    .tabs__content::-webkit-scrollbar-track {\n                background: var(--grayDark)\n        }\n            }\n    @media (color: 48842621) {\n    .tabs__content::-webkit-scrollbar-track {\n                background: var(--grayDark)\n        }\n            }\n    @media (prefers-color-scheme: dark) {\n    .tabs__content::-webkit-scrollbar-track {\n                background: var(--grayDark)\n        }\n            }\n    .tabs__content::-webkit-scrollbar-thumb {\n            background-color: var(--gray300);\n            border-radius: 20px;\n            border: 3px solid var(--gray100);\n        }\n    @media (color-index: 48) {\n    .tabs__content::-webkit-scrollbar-thumb {\n                background-color: var(--gray700);\n                border: 3px solid var(--grayDark)\n        }\n            }\n    @media (color: 48842621) {\n    .tabs__content::-webkit-scrollbar-thumb {\n                background-color: var(--gray700);\n                border: 3px solid var(--grayDark)\n        }\n            }\n    @media (prefers-color-scheme: dark) {\n    .tabs__content::-webkit-scrollbar-thumb {\n                background-color: var(--gray700);\n                border: 3px solid var(--grayDark)\n        }\n            }\n    @media (color-index: 48) {\n    .tabs__content {\n            background-color: var(--black)\n    }\n        }\n    @media (color: 48842621) {\n    .tabs__content {\n            background-color: var(--black)\n    }\n        }\n    @media (prefers-color-scheme: dark) {\n    .tabs__content {\n            background-color: var(--black)\n    }\n        }\n    .tabs__tab {\n        font-size: 16px;\n        width: 50%;\n        padding: 6px 5px;\n        line-height: 20px;\n        border: 0;\n        color: var(--gray700);\n        cursor: pointer;\n        text-align: center;\n        transition: var(--t3) color;\n    }\n    .tabs__tab:hover {\n            color: var(--gray900);\n        }\n    @media (color-index: 48) {\n    .tabs__tab:hover {\n                color: var(--gray100)\n        }\n            }\n    @media (color: 48842621) {\n    .tabs__tab:hover {\n                color: var(--gray100)\n        }\n            }\n    @media (prefers-color-scheme: dark) {\n    .tabs__tab:hover {\n                color: var(--gray100)\n        }\n            }\n    @media (color-index: 48) {\n    .tabs__tab {\n            color: var(--gray400)\n    }\n        }\n    @media (color: 48842621) {\n    .tabs__tab {\n            color: var(--gray400)\n    }\n        }\n    @media (prefers-color-scheme: dark) {\n    .tabs__tab {\n            color: var(--gray400)\n    }\n        }\n    .tabs__tab_active {\n            border-radius: 8px;\n            background-color: var(--white);\n            color: var(--gray900);\n            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);\n        }\n    @media (color-index: 48) {\n    .tabs__tab_active {\n                background-color: var(--black);\n                color: var(--gray300)\n        }\n            }\n    @media (color: 48842621) {\n    .tabs__tab_active {\n                background-color: var(--black);\n                color: var(--gray300)\n        }\n            }\n    @media (prefers-color-scheme: dark) {\n    .tabs__tab_active {\n                background-color: var(--black);\n                color: var(--gray300)\n        }\n            }\n\n.light-mode .tabs__panel {\n            background-color: var(--gray100);\n        }\n\n.light-mode .tabs__content {\n            background-color: var(--white);\n        }\n\n.light-mode .tabs__content::-webkit-scrollbar-track {\n                background: var(--gray100);\n            }\n\n.light-mode .tabs__content::-webkit-scrollbar-thumb {\n                background-color: var(--gray300);\n                border-radius: 20px;\n                border: 3px solid var(--gray100);\n            }\n\n.light-mode .tabs__tab {\n            color: var(--gray700);\n        }\n\n.light-mode .tabs__tab:hover {\n                color: var(--gray900);\n            }\n\n.light-mode .tabs__tab_active {\n                background-color: var(--white);\n                color: var(--gray900);\n            }\n\n.dark-mode .tabs__panel {\n            background: var(--gray900);\n        }\n\n.dark-mode .tabs__content {\n            background-color: var(--black);\n        }\n\n.dark-mode .tabs__content::-webkit-scrollbar-track {\n                background: var(--grayDark);\n            }\n\n.dark-mode .tabs__content::-webkit-scrollbar-thumb {\n                background-color: var(--gray700);\n                border-radius: 20px;\n                border: 3px solid var(--grayDark);\n            }\n\n.dark-mode .tabs__tab {\n            color: var(--gray400);\n        }\n\n.dark-mode .tabs__tab:hover {\n                color: var(--gray100);\n            }\n\n.dark-mode .tabs__tab_active {\n                background-color: var(--black);\n                color: var(--gray300);\n            }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 80493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon {\n    display: inline-block;\n    vertical-align: middle;\n    flex-shrink: 0;\n}\n\n    .icon--loading {\n        pointer-events: none;\n        animation: loader-spin 1.7s infinite linear;\n        animation-fill-mode: forwards;\n    }\n\n    .icon--button {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--update-filters {\n        width: 22px;\n        height: 22px;\n    }\n\n    .icon--settings {\n        width: 22px;\n        height: 22px;\n    }\n\n    .icon--pause {\n        width: 22px;\n        height: 22px;\n    }\n\n    .icon--logo {\n        width: 113px;\n        height: 25px;\n        color: #232323;\n    }\n\n    @media (color-index: 48) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    .icon--action {\n        width: 17px;\n        height: 17px;\n    }\n\n    .icon--cross {\n        width: 15px;\n        height: 15px;\n    }\n\n    .icon--play {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--circle {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--checkmark {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--exclamation {\n        width: 4px;\n        height: 24px;\n    }\n\n    .icon--select {\n        width: 14px;\n        height: 8px;\n    }\n\n.light-mode .icon--logo {\n            color: #232323;\n        }\n\n.dark-mode .icon--logo {\n            color: var(--gray300);\n        }\n\n@keyframes loader-spin {\n    from {\n        -webkit-transform: rotate(0deg);\n    } \n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 41657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n    border: none;\n    background-color: transparent;\n    border-radius: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 37153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:before,\n*:after {\n    box-sizing: border-box;\n}\n\n:root {\n    color-scheme: light dark;\n}\n\nhtml,\nbody,\n#root {\n    height: 100%;\n    min-height: 100%;\n    width: auto;\n    min-width: 320px;\n    background-color: var(--width);\n}\n\n@media (color-index: 48) {\n\nhtml,\nbody,\n#root {\n        background-color: var(--black)\n}\n    }\n\n@media (color: 48842621) {\n\nhtml,\nbody,\n#root {\n        background-color: var(--black)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\nhtml,\nbody,\n#root {\n        background-color: var(--black)\n}\n    }\n\nhtml {\n    font-size: 10px;\n    background-color: var(--width);\n}\n\n@media (color-index: 48) {\n\nhtml {\n        background-color: var(--black)\n}\n    }\n\n@media (color: 48842621) {\n\nhtml {\n        background-color: var(--black)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\nhtml {\n        background-color: var(--black)\n}\n    }\n\nbody {\n    margin: 0;\n    font-size: 1.6rem;\n    line-height: 1.4;\n    font-family: 'Roboto Flex', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Arial, sans-serif;\n    font-optical-sizing: none;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.hidden {\n    display: none;\n}\n\na {\n    color: currentColor;\n}\n\na.focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\na:focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\nbutton,\ninput,\ntextarea,\nselect {\n    font-family: inherit;\n}\n\nbutton.focus-visible, input.focus-visible, textarea.focus-visible, select.focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\nbutton:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {\n        outline: 2px solid var(--outline);\n    }\n\n.light-mode {\n    color-scheme: light;\n    background-color: var(--width);\n}\n\n.light-mode body,\n    .light-mode #root {\n        background-color: var(--width);\n    }\n\n.dark-mode {\n    color-scheme: dark;\n    background-color: var(--black);\n}\n\n.dark-mode body,\n    .dark-mode #root {\n        background-color: var(--black);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 65201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84381);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26834);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_buttons_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41657);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37153);
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_buttons_pcss__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 25460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91389);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59633);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*-- Chart --*/\n.c3 svg {\n  font: 10px sans-serif;\n  -webkit-tap-highlight-color: transparent; }\n\n.c3 path, .c3 line {\n  fill: none;\n  stroke: #000; }\n\n.c3 text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.c3-legend-item-tile,\n.c3-xgrid-focus,\n.c3-ygrid,\n.c3-event-rect,\n.c3-bars path {\n  shape-rendering: crispEdges; }\n\n.c3-chart-arc path {\n  stroke: #fff; }\n\n.c3-chart-arc text {\n  fill: #fff;\n  font-size: 13px; }\n\n/*-- Axis --*/\n/*-- Grid --*/\n.c3-grid line {\n  stroke: #aaa; }\n\n.c3-grid text {\n  fill: #aaa; }\n\n.c3-xgrid, .c3-ygrid {\n  stroke-dasharray: 3 3; }\n\n/*-- Text on Chart --*/\n.c3-text.c3-empty {\n  fill: #808080;\n  font-size: 2em; }\n\n/*-- Line --*/\n.c3-line {\n  stroke-width: 1px; }\n\n/*-- Point --*/\n.c3-circle._expanded_ {\n  stroke-width: 1px;\n  stroke: white; }\n\n.c3-selected-circle {\n  fill: white;\n  stroke-width: 2px; }\n\n/*-- Bar --*/\n.c3-bar {\n  stroke-width: 0; }\n\n.c3-bar._expanded_ {\n  fill-opacity: 1;\n  fill-opacity: 0.75; }\n\n/*-- Focus --*/\n.c3-target.c3-focused {\n  opacity: 1; }\n\n.c3-target.c3-focused path.c3-line, .c3-target.c3-focused path.c3-step {\n  stroke-width: 2px; }\n\n.c3-target.c3-defocused {\n  opacity: 0.3 !important; }\n\n/*-- Region --*/\n.c3-region {\n  fill: steelblue;\n  fill-opacity: .1; }\n\n/*-- Brush --*/\n.c3-brush .extent {\n  fill-opacity: .1; }\n\n/*-- Select - Drag --*/\n/*-- Legend --*/\n.c3-legend-item {\n  font-size: 12px; }\n\n.c3-legend-item-hidden {\n  opacity: 0.15; }\n\n.c3-legend-background {\n  opacity: 0.75;\n  fill: white;\n  stroke: lightgray;\n  stroke-width: 1; }\n\n/*-- Title --*/\n.c3-title {\n  font: 14px sans-serif; }\n\n/*-- Tooltip --*/\n.c3-tooltip-container {\n  z-index: 10; }\n\n.c3-tooltip {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background-color: #fff;\n  empty-cells: show;\n  box-shadow: 7px 7px 12px -9px #777777;\n  opacity: 0.9; }\n\n.c3-tooltip tr {\n  border: 1px solid #CCC; }\n\n.c3-tooltip th {\n  background-color: #aaa;\n  font-size: 14px;\n  padding: 2px 5px;\n  text-align: left;\n  color: #FFF; }\n\n.c3-tooltip td {\n  font-size: 13px;\n  padding: 3px 6px;\n  background-color: #fff;\n  border-left: 1px dotted #999; }\n\n.c3-tooltip td > span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 6px; }\n\n.c3-tooltip td.value {\n  text-align: right; }\n\n/*-- Area --*/\n.c3-area {\n  stroke-width: 0;\n  opacity: 0.2; }\n\n/*-- Arc --*/\n.c3-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em; }\n\n.c3-chart-arcs .c3-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: none; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-max {\n  fill: #777; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-min {\n  fill: #777; }\n\n.c3-chart-arc .c3-gauge-value {\n  fill: #000;\n  /*  font-size: 28px !important;*/ }\n\n.c3-chart-arc.c3-target g path {\n  opacity: 1; }\n\n.c3-chart-arc.c3-target.c3-focused g path {\n  opacity: 1; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iu": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony exports Translator, validator */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var NODE_TYPES;

(function (NODE_TYPES) {
  NODE_TYPES["PLACEHOLDER"] = "placeholder";
  NODE_TYPES["TEXT"] = "text";
  NODE_TYPES["TAG"] = "tag";
  NODE_TYPES["VOID_TAG"] = "void_tag";
})(NODE_TYPES || (NODE_TYPES = {}));

var isTextNode = function isTextNode(node) {
  return node.type === NODE_TYPES.TEXT;
};
var isTagNode = function isTagNode(node) {
  return node.type === NODE_TYPES.TAG;
};
var isPlaceholderNode = function isPlaceholderNode(node) {
  return node.type === NODE_TYPES.PLACEHOLDER;
};
var isVoidTagNode = function isVoidTagNode(node) {
  return node.type === NODE_TYPES.VOID_TAG;
};
var placeholderNode = function placeholderNode(value) {
  return {
    type: NODE_TYPES.PLACEHOLDER,
    value: value
  };
};
var textNode = function textNode(str) {
  return {
    type: NODE_TYPES.TEXT,
    value: str
  };
};
var tagNode = function tagNode(tagName, children) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.TAG,
    value: value,
    children: children
  };
};
var voidTagNode = function voidTagNode(tagName) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.VOID_TAG,
    value: value
  };
};
/**
 * Checks if target is node
 * @param target
 */

var isNode = function isNode(target) {
  if (typeof target === 'string') {
    return false;
  }

  return !!target.type;
};

var STATE;

(function (STATE) {
  /**
   * Parser function switches to the text state when parses simple text,
   * or content between open and close tags
   */
  STATE["TEXT"] = "text";
  /**
   * Parser function switches to the tag state when meets open tag brace ("<"), and switches back,
   * when meets closing tag brace (">")
   */

  STATE["TAG"] = "tag";
  /**
   * Parser function switches to the placeholder state when meets in the text
   * open placeholders brace ("{") and switches back to the text state,
   * when meets close placeholder brace ("}")
   */

  STATE["PLACEHOLDER"] = "placeholder";
})(STATE || (STATE = {}));

var CONTROL_CHARS = {
  TAG_OPEN_BRACE: '<',
  TAG_CLOSE_BRACE: '>',
  CLOSING_TAG_MARK: '/',
  PLACEHOLDER_MARK: '%'
};
/**
 * Checks if text length is enough to create text node
 * If text node created, then if stack is not empty it is pushed into stack,
 * otherwise into result
 * @param context
 */

var createTextNodeIfPossible = function createTextNodeIfPossible(context) {
  var text = context.text;

  if (text.length > 0) {
    var node = textNode(text);

    if (context.stack.length > 0) {
      context.stack.push(node);
    } else {
      context.result.push(node);
    }
  }

  context.text = '';
};
/**
 * Checks if lastFromStack tag has any attributes
 * @param lastFromStack
 */


var hasAttributes = function hasAttributes(lastFromStack) {
  // e.g. "a class" or "a href='#'"
  var tagStrParts = lastFromStack.split(' ');
  return tagStrParts.length > 1;
};
/**
 * Handles text state
 */


var textStateHandler = function textStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx; // switches to the tag state

  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.TAG;
  } // switches to the placeholder state


  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.PLACEHOLDER;
  } // remains in the text state


  context.text += currChar;
  return STATE.TEXT;
};
/**
 * Handles placeholder state
 * @param context
 */


var placeholderStateHandler = function placeholderStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      placeholder = context.placeholder,
      stack = context.stack,
      result = context.result,
      str = context.str;

  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    // if distance between current index and last state change equal to 1,
    // it means that placeholder mark was escaped by itself e.g. "%%",
    // so we return to the text state
    if (currIdx - lastTextStateChangeIdx === 1) {
      context.text += str.substring(lastTextStateChangeIdx, currIdx);
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    var node = placeholderNode(placeholder); // push node to the appropriate stack

    if (stack.length > 0) {
      stack.push(node);
    } else {
      result.push(node);
    }

    context.placeholder = '';
    return STATE.TEXT;
  }

  context.placeholder += currChar;
  return STATE.PLACEHOLDER;
};
/**
 * Switches current state to the tag state and returns tag state handler
 */


var tagStateHandler = function tagStateHandler(context) {
  var currChar = context.currChar,
      text = context.text,
      stack = context.stack,
      result = context.result,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      currIdx = context.currIdx,
      str = context.str;
  var tag = context.tag; // if found tag end ">"

  if (currChar === CONTROL_CHARS.TAG_CLOSE_BRACE) {
    // if the tag is close tag e.g. </a>
    if (tag.indexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === 0) {
      // remove slash from tag
      tag = tag.substring(1);
      var children = [];

      if (text.length > 0) {
        children.push(textNode(text));
        context.text = '';
      }

      var pairTagFound = false; // looking for the pair to the close tag

      while (!pairTagFound && stack.length > 0) {
        var lastFromStack = stack.pop(); // if tag from stack equal to close tag

        if (lastFromStack === tag) {
          // create tag node
          var node = tagNode(tag, children); // and add it to the appropriate stack

          if (stack.length > 0) {
            stack.push(node);
          } else {
            result.push(node);
          }

          children = [];
          pairTagFound = true;
        } else if (isNode(lastFromStack)) {
          // add nodes between close tag and open tag to the children
          children.unshift(lastFromStack);
        } else {
          if (typeof lastFromStack === 'string' && hasAttributes(lastFromStack)) {
            throw new Error("Tags in string should not have attributes: ".concat(str));
          } else {
            throw new Error("String has unbalanced tags: ".concat(str));
          }
        }

        if (stack.length === 0 && children.length > 0) {
          throw new Error("String has unbalanced tags: ".concat(str));
        }
      }

      context.tag = '';
      return STATE.TEXT;
    } // if the tag is void tag e.g. <img/>


    if (tag.lastIndexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === tag.length - 1) {
      tag = tag.substring(0, tag.length - 1);
      createTextNodeIfPossible(context);

      var _node = voidTagNode(tag); // add node to the appropriate stack


      if (stack.length > 0) {
        stack.push(_node);
      } else {
        result.push(_node);
      }

      context.tag = '';
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    stack.push(tag);
    context.tag = '';
    return STATE.TEXT;
  } // If we meet open tag "<" it means that we wrongly moved into tag state


  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.text += str.substring(lastTextStateChangeIdx, currIdx);
    context.lastTextStateChangeIdx = currIdx;
    context.tag = '';
    return STATE.TAG;
  }

  context.tag += currChar;
  return STATE.TAG;
};
/**
 * Parses string into AST (abstract syntax tree) and returns it
 * e.g.
 * parse("String to <a>translate</a>") ->
 * ```
 *      [
 *           { type: 'text', value: 'String to ' },
 *           { type: 'tag', value: 'a', children: [{ type: 'text', value: 'translate' }] }
 *      ];
 * ```
 * Empty string is parsed into empty AST (abstract syntax tree): "[]"
 * If founds unbalanced tags, it throws error about it
 *
 * @param {string} str - message in simplified ICU like syntax without plural support
 */


var parser = function parser() {
  var _STATE_HANDLERS;

  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = {
    /**
     * Stack is used to keep and search nested tag nodes
     */
    stack: [],

    /**
     * Result is stack where function allocates nodes
     */
    result: [],

    /**
     * Current char index
     */
    currIdx: 0,

    /**
     * Saves index of the last state change from the text state,
     * used to restore parsed text if we moved into other state wrongly
     */
    lastTextStateChangeIdx: 0,

    /**
     * Accumulated tag value
     */
    tag: '',

    /**
     * Accumulated text value
     */
    text: '',

    /**
     * Accumulated placeholder value
     */
    placeholder: '',

    /**
     * Parsed string
     */
    str: str
  };
  var STATE_HANDLERS = (_STATE_HANDLERS = {}, _defineProperty(_STATE_HANDLERS, STATE.TEXT, textStateHandler), _defineProperty(_STATE_HANDLERS, STATE.PLACEHOLDER, placeholderStateHandler), _defineProperty(_STATE_HANDLERS, STATE.TAG, tagStateHandler), _STATE_HANDLERS); // Start from text state

  var currentState = STATE.TEXT;

  while (context.currIdx < str.length) {
    context.currChar = str[context.currIdx];
    var currentStateHandler = STATE_HANDLERS[currentState];
    currentState = currentStateHandler(context);
    context.currIdx += 1;
  }

  var result = context.result,
      text = context.text,
      stack = context.stack,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx; // Means that tag or placeholder nodes were not closed, so we consider them as text

  if (currentState !== STATE.TEXT) {
    var restText = str.substring(lastTextStateChangeIdx);

    if ((restText + text).length > 0) {
      result.push(textNode(text + restText));
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (text.length > 0) {
      result.push(textNode(text));
    }
  }

  if (stack.length > 0) {
    throw new Error("String has unbalanced tags: ".concat(context.str));
  }

  return result;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Helper functions used by default to assemble strings from tag nodes
 * @param tagName
 * @param children
 */

var createStringElement = function createStringElement(tagName, children) {
  if (children) {
    return "<".concat(tagName, ">").concat(children, "</").concat(tagName, ">");
  }

  return "<".concat(tagName, "/>");
};
/**
 * Creates map with default values for tag converters
 */


var createDefaultValues = function createDefaultValues() {
  return {
    p: function p(children) {
      return createStringElement('p', children);
    },
    b: function b(children) {
      return createStringElement('b', children);
    },
    strong: function strong(children) {
      return createStringElement('strong', children);
    },
    tt: function tt(children) {
      return createStringElement('tt', children);
    },
    s: function s(children) {
      return createStringElement('s', children);
    },
    i: function i(children) {
      return createStringElement('i', children);
    }
  };
};
/**
 * This function accepts an AST (abstract syntax tree) which is a result
 * of the parser function call, and converts tree nodes into array of strings replacing node
 * values with provided values.
 * Values is a map with functions or strings, where each key is related to placeholder value
 * or tag value
 * e.g.
 * string "text <tag>tag text</tag> %placeholder%" is parsed into next AST
 *
 *      [
 *          { type: 'text', value: 'text ' },
 *          {
 *              type: 'tag',
 *              value: 'tag',
 *              children: [{ type: 'text', value: 'tag text' }],
 *          },
 *          { type: 'text', value: ' ' },
 *          { type: 'placeholder', value: 'placeholder' }
 *      ];
 *
 * this AST after format and next values
 *
 *      {
 *          // here used template strings, but it can be react components as well
 *          tag: (chunks) => `<b>${chunks}</b>`,
 *          placeholder: 'placeholder text'
 *      }
 *
 * will return next array
 *
 * [ 'text ', '<b>tag text</b>', ' ', 'placeholder text' ]
 *
 * as you can see, <tag> was replaced by <b>, and placeholder was replaced by placeholder text
 *
 * @param ast - AST (abstract syntax tree)
 * @param values
 */


var format = function format() {
  var ast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = [];

  var tmplValues = _objectSpread(_objectSpread({}, createDefaultValues()), values);

  var i = 0;

  while (i < ast.length) {
    var currentNode = ast[i]; // if current node is text node, there is nothing to change, append value to the result

    if (isTextNode(currentNode)) {
      result.push(currentNode.value);
    } else if (isTagNode(currentNode)) {
      var children = _toConsumableArray(format(currentNode.children, tmplValues));

      var value = tmplValues[currentNode.value];

      if (value) {
        // TODO consider using strong typing
        if (typeof value === 'function') {
          result.push(value(children.join('')));
        } else {
          result.push(value);
        }
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isVoidTagNode(currentNode)) {
      var _value = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value && typeof _value === 'string') {
        result.push(_value);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isPlaceholderNode(currentNode)) {
      var _value2 = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value2 && typeof _value2 === 'string') {
        result.push(_value2);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    }

    i += 1;
  }

  return result;
};
/**
 * Function gets AST (abstract syntax tree) or string and formats messages,
 * replacing values accordingly
 * e.g.
 *      const message = formatter('<a>some text</a>', {
 *          a: (chunks) => `<a href="#">${chunks}</a>`,
 *      });
 *      console.log(message); // ['<a href="#">some text</a>']
 * @param message
 * @param [values]
 */


var formatter = function formatter(message, values) {
  var ast = parser(message);
  var preparedValues = {}; // convert values to strings if not a function

  if (values) {
    Object.keys(values).forEach(function (key) {
      var value = values[key]; // TODO consider using strong typing

      if (typeof value === 'function') {
        preparedValues[key] = value;
      } else {
        preparedValues[key] = String(value);
      }
    });
  }

  return format(ast, preparedValues);
};

var _pluralFormsCount;

var AvailableLocales;

(function (AvailableLocales) {
  AvailableLocales["az"] = "az";
  AvailableLocales["bo"] = "bo";
  AvailableLocales["dz"] = "dz";
  AvailableLocales["id"] = "id";
  AvailableLocales["ja"] = "ja";
  AvailableLocales["jv"] = "jv";
  AvailableLocales["ka"] = "ka";
  AvailableLocales["km"] = "km";
  AvailableLocales["kn"] = "kn";
  AvailableLocales["ko"] = "ko";
  AvailableLocales["ms"] = "ms";
  AvailableLocales["th"] = "th";
  AvailableLocales["tr"] = "tr";
  AvailableLocales["vi"] = "vi";
  AvailableLocales["zh"] = "zh";
  AvailableLocales["zh_cn"] = "zh_cn";
  AvailableLocales["zh_tw"] = "zh_tw";
  AvailableLocales["af"] = "af";
  AvailableLocales["bn"] = "bn";
  AvailableLocales["bg"] = "bg";
  AvailableLocales["ca"] = "ca";
  AvailableLocales["da"] = "da";
  AvailableLocales["de"] = "de";
  AvailableLocales["el"] = "el";
  AvailableLocales["en"] = "en";
  AvailableLocales["eo"] = "eo";
  AvailableLocales["es"] = "es";
  AvailableLocales["et"] = "et";
  AvailableLocales["eu"] = "eu";
  AvailableLocales["fa"] = "fa";
  AvailableLocales["fi"] = "fi";
  AvailableLocales["fo"] = "fo";
  AvailableLocales["fur"] = "fur";
  AvailableLocales["fy"] = "fy";
  AvailableLocales["gl"] = "gl";
  AvailableLocales["gu"] = "gu";
  AvailableLocales["ha"] = "ha";
  AvailableLocales["he"] = "he";
  AvailableLocales["hu"] = "hu";
  AvailableLocales["is"] = "is";
  AvailableLocales["it"] = "it";
  AvailableLocales["ku"] = "ku";
  AvailableLocales["lb"] = "lb";
  AvailableLocales["ml"] = "ml";
  AvailableLocales["mn"] = "mn";
  AvailableLocales["mr"] = "mr";
  AvailableLocales["nah"] = "nah";
  AvailableLocales["nb"] = "nb";
  AvailableLocales["ne"] = "ne";
  AvailableLocales["nl"] = "nl";
  AvailableLocales["nn"] = "nn";
  AvailableLocales["no"] = "no";
  AvailableLocales["oc"] = "oc";
  AvailableLocales["om"] = "om";
  AvailableLocales["or"] = "or";
  AvailableLocales["pa"] = "pa";
  AvailableLocales["pap"] = "pap";
  AvailableLocales["ps"] = "ps";
  AvailableLocales["pt"] = "pt";
  AvailableLocales["pt_pt"] = "pt_pt";
  AvailableLocales["pt_br"] = "pt_br";
  AvailableLocales["so"] = "so";
  AvailableLocales["sq"] = "sq";
  AvailableLocales["sv"] = "sv";
  AvailableLocales["sw"] = "sw";
  AvailableLocales["ta"] = "ta";
  AvailableLocales["te"] = "te";
  AvailableLocales["tk"] = "tk";
  AvailableLocales["ur"] = "ur";
  AvailableLocales["zu"] = "zu";
  AvailableLocales["am"] = "am";
  AvailableLocales["bh"] = "bh";
  AvailableLocales["fil"] = "fil";
  AvailableLocales["fr"] = "fr";
  AvailableLocales["gun"] = "gun";
  AvailableLocales["hi"] = "hi";
  AvailableLocales["hy"] = "hy";
  AvailableLocales["ln"] = "ln";
  AvailableLocales["mg"] = "mg";
  AvailableLocales["nso"] = "nso";
  AvailableLocales["xbr"] = "xbr";
  AvailableLocales["ti"] = "ti";
  AvailableLocales["wa"] = "wa";
  AvailableLocales["be"] = "be";
  AvailableLocales["bs"] = "bs";
  AvailableLocales["hr"] = "hr";
  AvailableLocales["ru"] = "ru";
  AvailableLocales["sr"] = "sr";
  AvailableLocales["uk"] = "uk";
  AvailableLocales["cs"] = "cs";
  AvailableLocales["sk"] = "sk";
  AvailableLocales["ga"] = "ga";
  AvailableLocales["lt"] = "lt";
  AvailableLocales["sl"] = "sl";
  AvailableLocales["mk"] = "mk";
  AvailableLocales["mt"] = "mt";
  AvailableLocales["lv"] = "lv";
  AvailableLocales["pl"] = "pl";
  AvailableLocales["cy"] = "cy";
  AvailableLocales["ro"] = "ro";
  AvailableLocales["ar"] = "ar";
})(AvailableLocales || (AvailableLocales = {}));

var getPluralFormId = function getPluralFormId(locale, number) {
  var _supportedForms;

  if (number === 0) {
    return 0;
  }

  var slavNum = number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3;
  var supportedForms = (_supportedForms = {}, _defineProperty(_supportedForms, AvailableLocales.az, 1), _defineProperty(_supportedForms, AvailableLocales.bo, 1), _defineProperty(_supportedForms, AvailableLocales.dz, 1), _defineProperty(_supportedForms, AvailableLocales.id, 1), _defineProperty(_supportedForms, AvailableLocales.ja, 1), _defineProperty(_supportedForms, AvailableLocales.jv, 1), _defineProperty(_supportedForms, AvailableLocales.ka, 1), _defineProperty(_supportedForms, AvailableLocales.km, 1), _defineProperty(_supportedForms, AvailableLocales.kn, 1), _defineProperty(_supportedForms, AvailableLocales.ko, 1), _defineProperty(_supportedForms, AvailableLocales.ms, 1), _defineProperty(_supportedForms, AvailableLocales.th, 1), _defineProperty(_supportedForms, AvailableLocales.tr, 1), _defineProperty(_supportedForms, AvailableLocales.vi, 1), _defineProperty(_supportedForms, AvailableLocales.zh, 1), _defineProperty(_supportedForms, AvailableLocales.zh_tw, 1), _defineProperty(_supportedForms, AvailableLocales.zh_cn, 1), _defineProperty(_supportedForms, AvailableLocales.af, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bg, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ca, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.da, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.de, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.el, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.en, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.es, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.et, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fi, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fy, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ha, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.he, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.hu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.is, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.it, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ku, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.lb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ml, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mr, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nah, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ne, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.no, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.oc, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.om, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.or, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pap, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ps, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt_pt, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt_br, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.so, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sq, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sv, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sw, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ta, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.te, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.tk, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.zu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.am, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.bh, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fil, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fr, number === 0 || number >= 2 ? 2 : 1), _defineProperty(_supportedForms, AvailableLocales.gun, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hi, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hy, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ln, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.mg, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.nso, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.xbr, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ti, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.wa, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.be, slavNum), _defineProperty(_supportedForms, AvailableLocales.bs, slavNum), _defineProperty(_supportedForms, AvailableLocales.hr, slavNum), _defineProperty(_supportedForms, AvailableLocales.ru, slavNum), _defineProperty(_supportedForms, AvailableLocales.sr, slavNum), _defineProperty(_supportedForms, AvailableLocales.uk, slavNum), _defineProperty(_supportedForms, AvailableLocales.cs, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sk, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ga, number === 1 ? 1 : number === 2 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.lt, number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sl, number % 100 === 1 ? 1 : number % 100 === 2 ? 2 : number % 100 === 3 || number % 100 === 4 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.mk, number % 10 === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mt, number === 1 ? 1 : number === 0 || number % 100 > 1 && number % 100 < 11 ? 2 : number % 100 > 10 && number % 100 < 20 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.lv, number === 0 ? 0 : number % 10 === 1 && number % 100 !== 11 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pl, number === 1 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 12 || number % 100 > 14) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.cy, number === 1 ? 0 : number === 2 ? 1 : number === 8 || number === 11 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ro, number === 1 ? 1 : number === 1 || number % 100 > 0 && number % 100 < 20 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ar, number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 && number % 100 <= 99 ? 4 : 5), _supportedForms);
  return supportedForms[locale];
};

var pluralFormsCount = (_pluralFormsCount = {}, _defineProperty(_pluralFormsCount, AvailableLocales.az, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bo, 2), _defineProperty(_pluralFormsCount, AvailableLocales.dz, 2), _defineProperty(_pluralFormsCount, AvailableLocales.id, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ja, 2), _defineProperty(_pluralFormsCount, AvailableLocales.jv, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ka, 2), _defineProperty(_pluralFormsCount, AvailableLocales.km, 2), _defineProperty(_pluralFormsCount, AvailableLocales.kn, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ko, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ms, 2), _defineProperty(_pluralFormsCount, AvailableLocales.th, 2), _defineProperty(_pluralFormsCount, AvailableLocales.tr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.vi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh_cn, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh_tw, 2), _defineProperty(_pluralFormsCount, AvailableLocales.af, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bg, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ca, 3), _defineProperty(_pluralFormsCount, AvailableLocales.da, 3), _defineProperty(_pluralFormsCount, AvailableLocales.de, 3), _defineProperty(_pluralFormsCount, AvailableLocales.el, 3), _defineProperty(_pluralFormsCount, AvailableLocales.en, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.es, 3), _defineProperty(_pluralFormsCount, AvailableLocales.et, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fi, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fy, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ha, 3), _defineProperty(_pluralFormsCount, AvailableLocales.he, 3), _defineProperty(_pluralFormsCount, AvailableLocales.hu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.is, 3), _defineProperty(_pluralFormsCount, AvailableLocales.it, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ku, 3), _defineProperty(_pluralFormsCount, AvailableLocales.lb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ml, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mr, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nah, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ne, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.no, 3), _defineProperty(_pluralFormsCount, AvailableLocales.oc, 3), _defineProperty(_pluralFormsCount, AvailableLocales.om, 3), _defineProperty(_pluralFormsCount, AvailableLocales.or, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pap, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ps, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt_pt, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt_br, 3), _defineProperty(_pluralFormsCount, AvailableLocales.so, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sq, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sw, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ta, 3), _defineProperty(_pluralFormsCount, AvailableLocales.te, 3), _defineProperty(_pluralFormsCount, AvailableLocales.tk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.zu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.am, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fil, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fr, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gun, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hy, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ln, 2), _defineProperty(_pluralFormsCount, AvailableLocales.mg, 2), _defineProperty(_pluralFormsCount, AvailableLocales.nso, 2), _defineProperty(_pluralFormsCount, AvailableLocales.xbr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ti, 2), _defineProperty(_pluralFormsCount, AvailableLocales.wa, 2), _defineProperty(_pluralFormsCount, AvailableLocales.be, 4), _defineProperty(_pluralFormsCount, AvailableLocales.bs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.hr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ru, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.uk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ga, 4), _defineProperty(_pluralFormsCount, AvailableLocales.lt, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sl, 5), _defineProperty(_pluralFormsCount, AvailableLocales.mk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mt, 5), _defineProperty(_pluralFormsCount, AvailableLocales.lv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pl, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cy, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ro, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ar, 6), _pluralFormsCount);
var PLURAL_STRING_DELIMITER = '|';

var checkForms = function checkForms(str, locale, key) {
  var forms = str.split(PLURAL_STRING_DELIMITER);

  if (forms.length !== pluralFormsCount[locale]) {
    throw new Error("Invalid plural string \"".concat(key, "\" for locale ").concat(locale, ": ").concat(forms.length, " given; need: ").concat(pluralFormsCount[locale]));
  }
};
/**
 * Checks if plural forms are valid
 * @param str - message string
 * @param locale - message locale
 * @param key - message key, used for clearer log message
 */


var isPluralFormValid = function isPluralFormValid(str, locale, key) {
  try {
    checkForms(str, locale, key);
    return true;
  } catch (error) {
    return false;
  }
};
/**
 * Returns plural form corresponding to number
 * @param str
 * @param number
 * @param locale - current locale
 * @param key - message key
 */

var getForm = function getForm(str, number, locale, key) {
  checkForms(str, locale, key);
  var forms = str.split(PLURAL_STRING_DELIMITER);
  var currentForm = getPluralFormId(locale, number);
  return forms[currentForm].trim();
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultMessageConstructor = function defaultMessageConstructor(formatted) {
  return formatted.join('');
};

var Translator = /*#__PURE__*/function () {
  function Translator(i18n, messageConstructor, values) {
    _classCallCheck(this, Translator);

    this.i18n = i18n;
    this.messageConstructor = messageConstructor || defaultMessageConstructor;
    this.values = values || {};
  }
  /**
   * Retrieves message and translates it, substituting parameters where necessary
   * @param key - translation message key
   * @param params - values used to substitute placeholders and tags
   */


  _createClass(Translator, [{
    key: "getMessage",
    value: function getMessage(key) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var message = this.i18n.getMessage(key);

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }
      }

      var formatted = formatter(message, _objectSpread$1(_objectSpread$1({}, this.values), params));
      return this.messageConstructor(formatted);
    }
    /**
     * Retrieves correct plural form and translates it
     * @param key - translation message key
     * @param number - plural form number
     * @param params - values used to substitute placeholders or tags if necessary,
     * if params has "count" property it will be overridden by number (plural form number)
     */

  }, {
    key: "getPlural",
    value: function getPlural(key, number) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var message = this.i18n.getMessage(key);
      var language = this.i18n.getUILanguage();

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }

        language = this.i18n.getBaseUILanguage();
      }

      var form = getForm(message, number, language, key);
      var formatted = formatter(form, _objectSpread$1(_objectSpread$1(_objectSpread$1({}, this.values), params), {}, {
        count: number
      }));
      return this.messageConstructor(formatted);
    }
  }]);

  return Translator;
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the React components
 * We do not import React directly, because translator module can be used
 * in the modules without React too
 *
 * e.g.
 * const translateReact = createReactTranslator(getMessage, React);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into react components next way:
 *
 * const component = translateReact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param React - instance of react library
 */

var createReactTranslator = function createReactTranslator(i18n, react, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createReactElement = function createReactElement(tagName, children) {
    if (children) {
      return react.createElement(tagName, null, react.Children.toArray(children));
    }

    return react.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createReactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$2({
      p: function p(children) {
        return createReactElement('p', children);
      },
      b: function b(children) {
        return createReactElement('b', children);
      },
      strong: function strong(children) {
        return createReactElement('strong', children);
      },
      tt: function tt(children) {
        return createReactElement('tt', children);
      },
      s: function s(children) {
        return createReactElement('s', children);
      },
      i: function i(children) {
        return createReactElement('i', children);
      }
    }, externalDefaults);
  };

  var reactMessageConstructor = function reactMessageConstructor(formatted) {
    var reactChildren = react.Children.toArray(formatted); // if there is only strings in the array we join them

    if (reactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return reactChildren.join('');
    }

    return reactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, reactMessageConstructor, defaultValues);
};

var r,
    f;

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = 0;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the Preact components
 * We do not import Preact directly, because translator module can be used
 * in the modules without Preact too
 *
 * e.g.
 * const translatePreact = createPreactTranslator(getMessage, Preact);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into preact components next way:
 *
 * const component = translatePreact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param Preact - instance of preact library
 */

var createPreactTranslator = function createPreactTranslator(i18n, preact, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createPreactElement = function createPreactElement(tagName, children) {
    if (children) {
      return preact.createElement(tagName, null, A(children));
    }

    return preact.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createPreactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$3({
      p: function p(children) {
        return createPreactElement('p', children);
      },
      b: function b(children) {
        return createPreactElement('b', children);
      },
      strong: function strong(children) {
        return createPreactElement('strong', children);
      },
      tt: function tt(children) {
        return createPreactElement('tt', children);
      },
      s: function s(children) {
        return createPreactElement('s', children);
      },
      i: function i(children) {
        return createPreactElement('i', children);
      }
    }, externalDefaults);
  };

  var preactMessageConstructor = function preactMessageConstructor(formatted) {
    var preactChildren = A(formatted); // if there is only strings in the array we join them

    if (preactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return preactChildren.join('');
    }

    return preactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, preactMessageConstructor, defaultValues);
};

/**
 * Creates translator instance strings, by default for simple strings
 * @param i18n - function which returns translated message by key
 * @param messageConstructor - function that will collect messages
 * @param values - map with default values for tag converters
 */

var createTranslator = function createTranslator(i18n, messageConstructor, values) {
  return new Translator(i18n, messageConstructor, values);
};

var translate = {
  createTranslator: createTranslator,
  createReactTranslator: createReactTranslator,
  createPreactTranslator: createPreactTranslator
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Compares two AST (abstract syntax tree) structures,
 * view tests for examples
 * @param baseAst
 * @param targetAst
 */

var areAstStructuresSame = function areAstStructuresSame(baseAst, targetAst) {
  var textNodeFilter = function textNodeFilter(node) {
    return !isTextNode(node);
  };

  var filteredBaseAst = baseAst.filter(textNodeFilter);
  var filteredTargetAst = targetAst.filter(textNodeFilter); // if AST structures have different lengths, they are not equal

  if (filteredBaseAst.length !== filteredTargetAst.length) {
    return false;
  }

  var _loop = function _loop(i) {
    var baseNode = filteredBaseAst[i];
    var targetNode = filteredTargetAst.find(function (node) {
      return node.type === baseNode.type && node.value === baseNode.value;
    });

    if (!targetNode) {
      return {
        v: false
      };
    }

    if (targetNode.children && baseNode.children) {
      var areChildrenSame = areAstStructuresSame(baseNode.children, targetNode.children);

      if (!areChildrenSame) {
        return {
          v: false
        };
      }
    }
  };

  for (var i = 0; i < filteredBaseAst.length; i += 1) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return true;
};
/**
 * Validates translation against base string by AST (abstract syntax tree) structure
 * @param baseMessage - base message
 * @param translatedMessage - translated message
 */


var isTranslationValid = function isTranslationValid(baseMessage, translatedMessage) {
  var baseMessageAst = parser(baseMessage);
  var translatedMessageAst = parser(translatedMessage);
  return areAstStructuresSame(baseMessageAst, translatedMessageAst);
};
var validator = {
  isTranslationValid: isTranslationValid,
  isPluralFormValid: isPluralFormValid
};




/***/ }),

/***/ 36554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var CLASS = {
    target: 'c3-target',
    chart: 'c3-chart',
    chartLine: 'c3-chart-line',
    chartLines: 'c3-chart-lines',
    chartBar: 'c3-chart-bar',
    chartBars: 'c3-chart-bars',
    chartText: 'c3-chart-text',
    chartTexts: 'c3-chart-texts',
    chartArc: 'c3-chart-arc',
    chartArcs: 'c3-chart-arcs',
    chartArcsTitle: 'c3-chart-arcs-title',
    chartArcsBackground: 'c3-chart-arcs-background',
    chartArcsGaugeUnit: 'c3-chart-arcs-gauge-unit',
    chartArcsGaugeMax: 'c3-chart-arcs-gauge-max',
    chartArcsGaugeMin: 'c3-chart-arcs-gauge-min',
    selectedCircle: 'c3-selected-circle',
    selectedCircles: 'c3-selected-circles',
    eventRect: 'c3-event-rect',
    eventRects: 'c3-event-rects',
    eventRectsSingle: 'c3-event-rects-single',
    eventRectsMultiple: 'c3-event-rects-multiple',
    zoomRect: 'c3-zoom-rect',
    brush: 'c3-brush',
    focused: 'c3-focused',
    defocused: 'c3-defocused',
    region: 'c3-region',
    regions: 'c3-regions',
    title: 'c3-title',
    tooltipContainer: 'c3-tooltip-container',
    tooltip: 'c3-tooltip',
    tooltipName: 'c3-tooltip-name',
    shape: 'c3-shape',
    shapes: 'c3-shapes',
    line: 'c3-line',
    lines: 'c3-lines',
    bar: 'c3-bar',
    bars: 'c3-bars',
    circle: 'c3-circle',
    circles: 'c3-circles',
    arc: 'c3-arc',
    arcs: 'c3-arcs',
    area: 'c3-area',
    areas: 'c3-areas',
    empty: 'c3-empty',
    text: 'c3-text',
    texts: 'c3-texts',
    gaugeValue: 'c3-gauge-value',
    grid: 'c3-grid',
    gridLines: 'c3-grid-lines',
    xgrid: 'c3-xgrid',
    xgrids: 'c3-xgrids',
    xgridLine: 'c3-xgrid-line',
    xgridLines: 'c3-xgrid-lines',
    xgridFocus: 'c3-xgrid-focus',
    ygrid: 'c3-ygrid',
    ygrids: 'c3-ygrids',
    ygridLine: 'c3-ygrid-line',
    ygridLines: 'c3-ygrid-lines',
    axis: 'c3-axis',
    axisX: 'c3-axis-x',
    axisXLabel: 'c3-axis-x-label',
    axisY: 'c3-axis-y',
    axisYLabel: 'c3-axis-y-label',
    axisY2: 'c3-axis-y2',
    axisY2Label: 'c3-axis-y2-label',
    legendBackground: 'c3-legend-background',
    legendItem: 'c3-legend-item',
    legendItemEvent: 'c3-legend-item-event',
    legendItemTile: 'c3-legend-item-tile',
    legendItemHidden: 'c3-legend-item-hidden',
    legendItemFocused: 'c3-legend-item-focused',
    dragarea: 'c3-dragarea',
    EXPANDED: '_expanded_',
    SELECTED: '_selected_',
    INCLUDED: '_included_'
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isValue = function isValue(v) {
    return v || v === 0;
};
var isFunction = function isFunction(o) {
    return typeof o === 'function';
};
var isArray = function isArray(o) {
    return Array.isArray(o);
};
var isString = function isString(o) {
    return typeof o === 'string';
};
var isUndefined = function isUndefined(v) {
    return typeof v === 'undefined';
};
var isDefined = function isDefined(v) {
    return typeof v !== 'undefined';
};
var ceil10 = function ceil10(v) {
    return Math.ceil(v / 10) * 10;
};
var asHalfPixel = function asHalfPixel(n) {
    return Math.ceil(n) + 0.5;
};
var diffDomain = function diffDomain(d) {
    return d[1] - d[0];
};
var isEmpty = function isEmpty(o) {
    return typeof o === 'undefined' || o === null || isString(o) && o.length === 0 || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && Object.keys(o).length === 0;
};
var notEmpty = function notEmpty(o) {
    return !c3_chart_internal_fn.isEmpty(o);
};
var getOption = function getOption(options, key, defaultValue) {
    return isDefined(options[key]) ? options[key] : defaultValue;
};
var hasValue = function hasValue(dict, value) {
    var found = false;
    Object.keys(dict).forEach(function (key) {
        if (dict[key] === value) {
            found = true;
        }
    });
    return found;
};
var sanitise = function sanitise(str) {
    return typeof str === 'string' ? str.replace(/</g, '&lt;').replace(/>/g, '&gt;') : str;
};
var getPathBox = function getPathBox(path) {
    var box = path.getBoundingClientRect(),
        items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
        minX = items[0].x,
        minY = Math.min(items[0].y, items[1].y);
    return { x: minX, y: minY, width: box.width, height: box.height };
};

// Features:
// 1. category axis
// 2. ceil values of translate/x/y to int for half pixel antialiasing
// 3. multiline tick text
var tickTextCharSize;
function c3_axis(d3, params) {
    var scale = d3.scale.linear(),
        orient = "bottom",
        innerTickSize = 6,
        outerTickSize,
        tickPadding = 3,
        tickValues = null,
        tickFormat,
        tickArguments;

    var tickOffset = 0,
        tickCulling = true,
        tickCentered;

    params = params || {};
    outerTickSize = params.withOuterTick ? 6 : 0;

    function axisX(selection, x) {
        selection.attr("transform", function (d) {
            return "translate(" + Math.ceil(x(d) + tickOffset) + ", 0)";
        });
    }
    function axisY(selection, y) {
        selection.attr("transform", function (d) {
            return "translate(0," + Math.ceil(y(d)) + ")";
        });
    }
    function scaleExtent(domain) {
        var start = domain[0],
            stop = domain[domain.length - 1];
        return start < stop ? [start, stop] : [stop, start];
    }
    function generateTicks(scale) {
        var i,
            domain,
            ticks = [];
        if (scale.ticks) {
            return scale.ticks.apply(scale, tickArguments);
        }
        domain = scale.domain();
        for (i = Math.ceil(domain[0]); i < domain[1]; i++) {
            ticks.push(i);
        }
        if (ticks.length > 0 && ticks[0] > 0) {
            ticks.unshift(ticks[0] - (ticks[1] - ticks[0]));
        }
        return ticks;
    }
    function copyScale() {
        var newScale = scale.copy(),
            domain;
        if (params.isCategory) {
            domain = scale.domain();
            newScale.domain([domain[0], domain[1] - 1]);
        }
        return newScale;
    }
    function textFormatted(v) {
        var formatted = tickFormat ? tickFormat(v) : v;
        return typeof formatted !== 'undefined' ? formatted : '';
    }
    function getSizeFor1Char(tick) {
        if (tickTextCharSize) {
            return tickTextCharSize;
        }
        var size = {
            h: 11.5,
            w: 5.5
        };
        tick.select('text').text(textFormatted).each(function (d) {
            var box = this.getBoundingClientRect(),
                text = textFormatted(d),
                h = box.height,
                w = text ? box.width / text.length : undefined;
            if (h && w) {
                size.h = h;
                size.w = w;
            }
        }).text('');
        tickTextCharSize = size;
        return size;
    }
    function transitionise(selection) {
        return params.withoutTransition ? selection : d3.transition(selection);
    }
    function axis(g) {
        g.each(function () {
            var g = axis.g = d3.select(this);

            var scale0 = this.__chart__ || scale,
                scale1 = this.__chart__ = copyScale();

            var ticks = tickValues ? tickValues : generateTicks(scale1),
                tick = g.selectAll(".tick").data(ticks, scale1),
                tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),

            // MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
            tickExit = tick.exit().remove(),
                tickUpdate = transitionise(tick).style("opacity", 1),
                tickTransform,
                tickX,
                tickY;

            var range = scale.rangeExtent ? scale.rangeExtent() : scaleExtent(scale.range()),
                path = g.selectAll(".domain").data([0]),
                pathUpdate = (path.enter().append("path").attr("class", "domain"), transitionise(path));
            tickEnter.append("line");
            tickEnter.append("text");

            var lineEnter = tickEnter.select("line"),
                lineUpdate = tickUpdate.select("line"),
                textEnter = tickEnter.select("text"),
                textUpdate = tickUpdate.select("text");

            if (params.isCategory) {
                tickOffset = Math.ceil((scale1(1) - scale1(0)) / 2);
                tickX = tickCentered ? 0 : tickOffset;
                tickY = tickCentered ? tickOffset : 0;
            } else {
                tickOffset = tickX = 0;
            }

            var text,
                tspan,
                sizeFor1Char = getSizeFor1Char(g.select('.tick')),
                counts = [];
            var tickLength = Math.max(innerTickSize, 0) + tickPadding,
                isVertical = orient === 'left' || orient === 'right';

            // this should be called only when category axis
            function splitTickText(d, maxWidth) {
                var tickText = textFormatted(d),
                    subtext,
                    spaceIndex,
                    textWidth,
                    splitted = [];

                if (Object.prototype.toString.call(tickText) === "[object Array]") {
                    return tickText;
                }

                if (!maxWidth || maxWidth <= 0) {
                    maxWidth = isVertical ? 95 : params.isCategory ? Math.ceil(scale1(ticks[1]) - scale1(ticks[0])) - 12 : 110;
                }

                function split(splitted, text) {
                    spaceIndex = undefined;
                    for (var i = 1; i < text.length; i++) {
                        if (text.charAt(i) === ' ') {
                            spaceIndex = i;
                        }
                        subtext = text.substr(0, i + 1);
                        textWidth = sizeFor1Char.w * subtext.length;
                        // if text width gets over tick width, split by space index or crrent index
                        if (maxWidth < textWidth) {
                            return split(splitted.concat(text.substr(0, spaceIndex ? spaceIndex : i)), text.slice(spaceIndex ? spaceIndex + 1 : i));
                        }
                    }
                    return splitted.concat(text);
                }

                return split(splitted, tickText + "");
            }

            function tspanDy(d, i) {
                var dy = sizeFor1Char.h;
                if (i === 0) {
                    if (orient === 'left' || orient === 'right') {
                        dy = -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - 3);
                    } else {
                        dy = ".71em";
                    }
                }
                return dy;
            }

            function tickSize(d) {
                var tickPosition = scale(d) + (tickCentered ? 0 : tickOffset);
                return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
            }

            text = tick.select("text");
            tspan = text.selectAll('tspan').data(function (d, i) {
                var splitted = params.tickMultiline ? splitTickText(d, params.tickWidth) : [].concat(textFormatted(d));
                counts[i] = splitted.length;
                return splitted.map(function (s) {
                    return { index: i, splitted: s };
                });
            });
            tspan.enter().append('tspan');
            tspan.exit().remove();
            tspan.text(function (d) {
                return d.splitted;
            });

            var rotate = params.tickTextRotate;

            function textAnchorForText(rotate) {
                if (!rotate) {
                    return 'middle';
                }
                return rotate > 0 ? "start" : "end";
            }
            function textTransform(rotate) {
                if (!rotate) {
                    return '';
                }
                return "rotate(" + rotate + ")";
            }
            function dxForText(rotate) {
                if (!rotate) {
                    return 0;
                }
                return 8 * Math.sin(Math.PI * (rotate / 180));
            }
            function yForText(rotate) {
                if (!rotate) {
                    return tickLength;
                }
                return 11.5 - 2.5 * (rotate / 15) * (rotate > 0 ? 1 : -1);
            }

            switch (orient) {
                case "bottom":
                    {
                        tickTransform = axisX;
                        lineEnter.attr("y2", innerTickSize);
                        textEnter.attr("y", tickLength);
                        lineUpdate.attr("x1", tickX).attr("x2", tickX).attr("y2", tickSize);
                        textUpdate.attr("x", 0).attr("y", yForText(rotate)).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate));
                        tspan.attr('x', 0).attr("dy", tspanDy).attr('dx', dxForText(rotate));
                        pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
                        break;
                    }
                case "top":
                    {
                        // TODO: rotated tick text
                        tickTransform = axisX;
                        lineEnter.attr("y2", -innerTickSize);
                        textEnter.attr("y", -tickLength);
                        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
                        textUpdate.attr("x", 0).attr("y", -tickLength);
                        text.style("text-anchor", "middle");
                        tspan.attr('x', 0).attr("dy", "0em");
                        pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
                        break;
                    }
                case "left":
                    {
                        tickTransform = axisY;
                        lineEnter.attr("x2", -innerTickSize);
                        textEnter.attr("x", -tickLength);
                        lineUpdate.attr("x2", -innerTickSize).attr("y1", tickY).attr("y2", tickY);
                        textUpdate.attr("x", -tickLength).attr("y", tickOffset);
                        text.style("text-anchor", "end");
                        tspan.attr('x', -tickLength).attr("dy", tspanDy);
                        pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
                        break;
                    }
                case "right":
                    {
                        tickTransform = axisY;
                        lineEnter.attr("x2", innerTickSize);
                        textEnter.attr("x", tickLength);
                        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
                        textUpdate.attr("x", tickLength).attr("y", 0);
                        text.style("text-anchor", "start");
                        tspan.attr('x', tickLength).attr("dy", tspanDy);
                        pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
                        break;
                    }
            }
            if (scale1.rangeBand) {
                var x = scale1,
                    dx = x.rangeBand() / 2;
                scale0 = scale1 = function scale1(d) {
                    return x(d) + dx;
                };
            } else if (scale0.rangeBand) {
                scale0 = scale1;
            } else {
                tickExit.call(tickTransform, scale1);
            }
            tickEnter.call(tickTransform, scale0);
            tickUpdate.call(tickTransform, scale1);
        });
    }
    axis.scale = function (x) {
        if (!arguments.length) {
            return scale;
        }
        scale = x;
        return axis;
    };
    axis.orient = function (x) {
        if (!arguments.length) {
            return orient;
        }
        orient = x in { top: 1, right: 1, bottom: 1, left: 1 } ? x + "" : "bottom";
        return axis;
    };
    axis.tickFormat = function (format) {
        if (!arguments.length) {
            return tickFormat;
        }
        tickFormat = format;
        return axis;
    };
    axis.tickCentered = function (isCentered) {
        if (!arguments.length) {
            return tickCentered;
        }
        tickCentered = isCentered;
        return axis;
    };
    axis.tickOffset = function () {
        return tickOffset;
    };
    axis.tickInterval = function () {
        var interval, length;
        if (params.isCategory) {
            interval = tickOffset * 2;
        } else {
            length = axis.g.select('path.domain').node().getTotalLength() - outerTickSize * 2;
            interval = length / axis.g.selectAll('line').size();
        }
        return interval === Infinity ? 0 : interval;
    };
    axis.ticks = function () {
        if (!arguments.length) {
            return tickArguments;
        }
        tickArguments = arguments;
        return axis;
    };
    axis.tickCulling = function (culling) {
        if (!arguments.length) {
            return tickCulling;
        }
        tickCulling = culling;
        return axis;
    };
    axis.tickValues = function (x) {
        if (typeof x === 'function') {
            tickValues = function tickValues() {
                return x(scale.domain());
            };
        } else {
            if (!arguments.length) {
                return tickValues;
            }
            tickValues = x;
        }
        return axis;
    };
    return axis;
}

function Axis(owner) {
    API.call(this, owner);
}

inherit(API, Axis);

Axis.prototype.init = function init() {

    var $$ = this.owner,
        config = $$.config,
        main = $$.main;
    $$.axes.x = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisX).attr("clip-path", $$.clipPathForXAxis).attr("transform", $$.getTranslate('x')).style("visibility", config.axis_x_show ? 'visible' : 'hidden');
    $$.axes.x.append("text").attr("class", CLASS.axisXLabel).attr("transform", config.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this));
    $$.axes.y = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisY).attr("clip-path", config.axis_y_inner ? "" : $$.clipPathForYAxis).attr("transform", $$.getTranslate('y')).style("visibility", config.axis_y_show ? 'visible' : 'hidden');
    $$.axes.y.append("text").attr("class", CLASS.axisYLabel).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this));

    $$.axes.y2 = main.append("g").attr("class", CLASS.axis + ' ' + CLASS.axisY2
    // clip-path?
    ).attr("transform", $$.getTranslate('y2')).style("visibility", config.axis_y2_show ? 'visible' : 'hidden');
    $$.axes.y2.append("text").attr("class", CLASS.axisY2Label).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
};
Axis.prototype.getXAxis = function getXAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
    var $$ = this.owner,
        config = $$.config,
        axisParams = {
        isCategory: $$.isCategorized(),
        withOuterTick: withOuterTick,
        tickMultiline: config.axis_x_tick_multiline,
        tickWidth: config.axis_x_tick_width,
        tickTextRotate: withoutRotateTickText ? 0 : config.axis_x_tick_rotate,
        withoutTransition: withoutTransition
    },
        axis = c3_axis($$.d3, axisParams).scale(scale).orient(orient);

    if ($$.isTimeSeries() && tickValues && typeof tickValues !== "function") {
        tickValues = tickValues.map(function (v) {
            return $$.parseDate(v);
        });
    }

    // Set tick
    axis.tickFormat(tickFormat).tickValues(tickValues);
    if ($$.isCategorized()) {
        axis.tickCentered(config.axis_x_tick_centered);
        if (isEmpty(config.axis_x_tick_culling)) {
            config.axis_x_tick_culling = false;
        }
    }

    return axis;
};
Axis.prototype.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
    var $$ = this.owner,
        config = $$.config,
        tickValues;
    if (config.axis_x_tick_fit || config.axis_x_tick_count) {
        tickValues = this.generateTickValues($$.mapTargetsToUniqueXs(targets), config.axis_x_tick_count, $$.isTimeSeries());
    }
    if (axis) {
        axis.tickValues(tickValues);
    } else {
        $$.xAxis.tickValues(tickValues);
        $$.subXAxis.tickValues(tickValues);
    }
    return tickValues;
};
Axis.prototype.getYAxis = function getYAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
    var $$ = this.owner,
        config = $$.config,
        axisParams = {
        withOuterTick: withOuterTick,
        withoutTransition: withoutTransition,
        tickTextRotate: withoutRotateTickText ? 0 : config.axis_y_tick_rotate
    },
        axis = c3_axis($$.d3, axisParams).scale(scale).orient(orient).tickFormat(tickFormat);
    if ($$.isTimeSeriesY()) {
        axis.ticks($$.d3.time[config.axis_y_tick_time_value], config.axis_y_tick_time_interval);
    } else {
        axis.tickValues(tickValues);
    }
    return axis;
};
Axis.prototype.getId = function getId(id) {
    var config = this.owner.config;
    return id in config.data_axes ? config.data_axes[id] : 'y';
};
Axis.prototype.getXAxisTickFormat = function getXAxisTickFormat() {
    var $$ = this.owner,
        config = $$.config,
        format = $$.isTimeSeries() ? $$.defaultAxisTimeFormat : $$.isCategorized() ? $$.categoryName : function (v) {
        return v < 0 ? v.toFixed(0) : v;
    };
    if (config.axis_x_tick_format) {
        if (isFunction(config.axis_x_tick_format)) {
            format = config.axis_x_tick_format;
        } else if ($$.isTimeSeries()) {
            format = function format(date) {
                return date ? $$.axisTimeFormat(config.axis_x_tick_format)(date) : "";
            };
        }
    }
    return isFunction(format) ? function (v) {
        return format.call($$, v);
    } : format;
};
Axis.prototype.getTickValues = function getTickValues(tickValues, axis) {
    return tickValues ? tickValues : axis ? axis.tickValues() : undefined;
};
Axis.prototype.getXAxisTickValues = function getXAxisTickValues() {
    return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
};
Axis.prototype.getYAxisTickValues = function getYAxisTickValues() {
    return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
};
Axis.prototype.getY2AxisTickValues = function getY2AxisTickValues() {
    return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
};
Axis.prototype.getLabelOptionByAxisId = function getLabelOptionByAxisId(axisId) {
    var $$ = this.owner,
        config = $$.config,
        option;
    if (axisId === 'y') {
        option = config.axis_y_label;
    } else if (axisId === 'y2') {
        option = config.axis_y2_label;
    } else if (axisId === 'x') {
        option = config.axis_x_label;
    }
    return option;
};
Axis.prototype.getLabelText = function getLabelText(axisId) {
    var option = this.getLabelOptionByAxisId(axisId);
    return isString(option) ? option : option ? option.text : null;
};
Axis.prototype.setLabelText = function setLabelText(axisId, text) {
    var $$ = this.owner,
        config = $$.config,
        option = this.getLabelOptionByAxisId(axisId);
    if (isString(option)) {
        if (axisId === 'y') {
            config.axis_y_label = text;
        } else if (axisId === 'y2') {
            config.axis_y2_label = text;
        } else if (axisId === 'x') {
            config.axis_x_label = text;
        }
    } else if (option) {
        option.text = text;
    }
};
Axis.prototype.getLabelPosition = function getLabelPosition(axisId, defaultPosition) {
    var option = this.getLabelOptionByAxisId(axisId),
        position = option && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option.position ? option.position : defaultPosition;
    return {
        isInner: position.indexOf('inner') >= 0,
        isOuter: position.indexOf('outer') >= 0,
        isLeft: position.indexOf('left') >= 0,
        isCenter: position.indexOf('center') >= 0,
        isRight: position.indexOf('right') >= 0,
        isTop: position.indexOf('top') >= 0,
        isMiddle: position.indexOf('middle') >= 0,
        isBottom: position.indexOf('bottom') >= 0
    };
};
Axis.prototype.getXAxisLabelPosition = function getXAxisLabelPosition() {
    return this.getLabelPosition('x', this.owner.config.axis_rotated ? 'inner-top' : 'inner-right');
};
Axis.prototype.getYAxisLabelPosition = function getYAxisLabelPosition() {
    return this.getLabelPosition('y', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
};
Axis.prototype.getY2AxisLabelPosition = function getY2AxisLabelPosition() {
    return this.getLabelPosition('y2', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
};
Axis.prototype.getLabelPositionById = function getLabelPositionById(id) {
    return id === 'y2' ? this.getY2AxisLabelPosition() : id === 'y' ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
};
Axis.prototype.textForXAxisLabel = function textForXAxisLabel() {
    return this.getLabelText('x');
};
Axis.prototype.textForYAxisLabel = function textForYAxisLabel() {
    return this.getLabelText('y');
};
Axis.prototype.textForY2AxisLabel = function textForY2AxisLabel() {
    return this.getLabelText('y2');
};
Axis.prototype.xForAxisLabel = function xForAxisLabel(forHorizontal, position) {
    var $$ = this.owner;
    if (forHorizontal) {
        return position.isLeft ? 0 : position.isCenter ? $$.width / 2 : $$.width;
    } else {
        return position.isBottom ? -$$.height : position.isMiddle ? -$$.height / 2 : 0;
    }
};
Axis.prototype.dxForAxisLabel = function dxForAxisLabel(forHorizontal, position) {
    if (forHorizontal) {
        return position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
    } else {
        return position.isTop ? "-0.5em" : position.isBottom ? "0.5em" : "0";
    }
};
Axis.prototype.textAnchorForAxisLabel = function textAnchorForAxisLabel(forHorizontal, position) {
    if (forHorizontal) {
        return position.isLeft ? 'start' : position.isCenter ? 'middle' : 'end';
    } else {
        return position.isBottom ? 'start' : position.isMiddle ? 'middle' : 'end';
    }
};
Axis.prototype.xForXAxisLabel = function xForXAxisLabel() {
    return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
};
Axis.prototype.xForYAxisLabel = function xForYAxisLabel() {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
};
Axis.prototype.xForY2AxisLabel = function xForY2AxisLabel() {
    return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
};
Axis.prototype.dxForXAxisLabel = function dxForXAxisLabel() {
    return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
};
Axis.prototype.dxForYAxisLabel = function dxForYAxisLabel() {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
};
Axis.prototype.dxForY2AxisLabel = function dxForY2AxisLabel() {
    return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
};
Axis.prototype.dyForXAxisLabel = function dyForXAxisLabel() {
    var $$ = this.owner,
        config = $$.config,
        position = this.getXAxisLabelPosition();
    if (config.axis_rotated) {
        return position.isInner ? "1.2em" : -25 - this.getMaxTickWidth('x');
    } else {
        return position.isInner ? "-0.5em" : config.axis_x_height ? config.axis_x_height - 10 : "3em";
    }
};
Axis.prototype.dyForYAxisLabel = function dyForYAxisLabel() {
    var $$ = this.owner,
        position = this.getYAxisLabelPosition();
    if ($$.config.axis_rotated) {
        return position.isInner ? "-0.5em" : "3em";
    } else {
        return position.isInner ? "1.2em" : -10 - ($$.config.axis_y_inner ? 0 : this.getMaxTickWidth('y') + 10);
    }
};
Axis.prototype.dyForY2AxisLabel = function dyForY2AxisLabel() {
    var $$ = this.owner,
        position = this.getY2AxisLabelPosition();
    if ($$.config.axis_rotated) {
        return position.isInner ? "1.2em" : "-2.2em";
    } else {
        return position.isInner ? "-0.5em" : 15 + ($$.config.axis_y2_inner ? 0 : this.getMaxTickWidth('y2') + 15);
    }
};
Axis.prototype.textAnchorForXAxisLabel = function textAnchorForXAxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel(!$$.config.axis_rotated, this.getXAxisLabelPosition());
};
Axis.prototype.textAnchorForYAxisLabel = function textAnchorForYAxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getYAxisLabelPosition());
};
Axis.prototype.textAnchorForY2AxisLabel = function textAnchorForY2AxisLabel() {
    var $$ = this.owner;
    return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getY2AxisLabelPosition());
};
Axis.prototype.getMaxTickWidth = function getMaxTickWidth(id, withoutRecompute) {
    var $$ = this.owner,
        config = $$.config,
        maxWidth = 0,
        targetsToShow,
        scale,
        axis,
        dummy,
        svg;
    if (withoutRecompute && $$.currentMaxTickWidths[id]) {
        return $$.currentMaxTickWidths[id];
    }
    if ($$.svg) {
        targetsToShow = $$.filterTargetsToShow($$.data.targets);
        if (id === 'y') {
            scale = $$.y.copy().domain($$.getYDomain(targetsToShow, 'y'));
            axis = this.getYAxis(scale, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, false, true, true);
        } else if (id === 'y2') {
            scale = $$.y2.copy().domain($$.getYDomain(targetsToShow, 'y2'));
            axis = this.getYAxis(scale, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, false, true, true);
        } else {
            scale = $$.x.copy().domain($$.getXDomain(targetsToShow));
            axis = this.getXAxis(scale, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, false, true, true);
            this.updateXAxisTickValues(targetsToShow, axis);
        }
        dummy = $$.d3.select('body').append('div').classed('c3', true);
        svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0), svg.append('g').call(axis).each(function () {
            $$.d3.select(this).selectAll('text').each(function () {
                var box = this.getBoundingClientRect();
                if (maxWidth < box.width) {
                    maxWidth = box.width;
                }
            });
            dummy.remove();
        });
    }
    $$.currentMaxTickWidths[id] = maxWidth <= 0 ? $$.currentMaxTickWidths[id] : maxWidth;
    return $$.currentMaxTickWidths[id];
};

Axis.prototype.updateLabels = function updateLabels(withTransition) {
    var $$ = this.owner;
    var axisXLabel = $$.main.select('.' + CLASS.axisX + ' .' + CLASS.axisXLabel),
        axisYLabel = $$.main.select('.' + CLASS.axisY + ' .' + CLASS.axisYLabel),
        axisY2Label = $$.main.select('.' + CLASS.axisY2 + ' .' + CLASS.axisY2Label);
    (withTransition ? axisXLabel.transition() : axisXLabel).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this));
    (withTransition ? axisYLabel.transition() : axisYLabel).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this));
    (withTransition ? axisY2Label.transition() : axisY2Label).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
};
Axis.prototype.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
    var p = typeof padding === 'number' ? padding : padding[key];
    if (!isValue(p)) {
        return defaultValue;
    }
    if (padding.unit === 'ratio') {
        return padding[key] * domainLength;
    }
    // assume padding is pixels if unit is not specified
    return this.convertPixelsToAxisPadding(p, domainLength);
};
Axis.prototype.convertPixelsToAxisPadding = function convertPixelsToAxisPadding(pixels, domainLength) {
    var $$ = this.owner,
        length = $$.config.axis_rotated ? $$.width : $$.height;
    return domainLength * (pixels / length);
};
Axis.prototype.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
    var tickValues = values,
        targetCount,
        start,
        end,
        count,
        interval,
        i,
        tickValue;
    if (tickCount) {
        targetCount = isFunction(tickCount) ? tickCount() : tickCount;
        // compute ticks according to tickCount
        if (targetCount === 1) {
            tickValues = [values[0]];
        } else if (targetCount === 2) {
            tickValues = [values[0], values[values.length - 1]];
        } else if (targetCount > 2) {
            count = targetCount - 2;
            start = values[0];
            end = values[values.length - 1];
            interval = (end - start) / (count + 1);
            // re-construct unique values
            tickValues = [start];
            for (i = 0; i < count; i++) {
                tickValue = +start + interval * (i + 1);
                tickValues.push(forTimeSeries ? new Date(tickValue) : tickValue);
            }
            tickValues.push(end);
        }
    }
    if (!forTimeSeries) {
        tickValues = tickValues.sort(function (a, b) {
            return a - b;
        });
    }
    return tickValues;
};
Axis.prototype.generateTransitions = function generateTransitions(duration) {
    var $$ = this.owner,
        axes = $$.axes;
    return {
        axisX: duration ? axes.x.transition().duration(duration) : axes.x,
        axisY: duration ? axes.y.transition().duration(duration) : axes.y,
        axisY2: duration ? axes.y2.transition().duration(duration) : axes.y2,
        axisSubX: duration ? axes.subx.transition().duration(duration) : axes.subx
    };
};
Axis.prototype.redraw = function redraw(transitions, isHidden) {
    var $$ = this.owner;
    $$.axes.x.style("opacity", isHidden ? 0 : 1);
    $$.axes.y.style("opacity", isHidden ? 0 : 1);
    $$.axes.y2.style("opacity", isHidden ? 0 : 1);
    $$.axes.subx.style("opacity", isHidden ? 0 : 1);
    transitions.axisX.call($$.xAxis);
    transitions.axisY.call($$.yAxis);
    transitions.axisY2.call($$.y2Axis);
    transitions.axisSubX.call($$.subXAxis);
};

var c3$1 = { version: "0.4.15" };

var c3_chart_fn;
var c3_chart_internal_fn;
var c3_chart_internal_axis_fn;

function API(owner) {
    this.owner = owner;
}

function inherit(base, derived) {

    if (Object.create) {
        derived.prototype = Object.create(base.prototype);
    } else {
        var f = function f() {};
        f.prototype = base.prototype;
        derived.prototype = new f();
    }

    derived.prototype.constructor = derived;

    return derived;
}

function Chart(config) {
    var $$ = this.internal = new ChartInternal(this);
    $$.loadConfig(config);

    $$.beforeInit(config);
    $$.init();
    $$.afterInit(config);

    // bind "this" to nested API
    (function bindThis(fn, target, argThis) {
        Object.keys(fn).forEach(function (key) {
            target[key] = fn[key].bind(argThis);
            if (Object.keys(fn[key]).length > 0) {
                bindThis(fn[key], target[key], argThis);
            }
        });
    })(c3_chart_fn, this, this);
}

function ChartInternal(api) {
    var $$ = this;
    $$.d3 = window.d3 ? window.d3 :  true ? __webpack_require__(92846) : 0;
    $$.api = api;
    $$.config = $$.getDefaultConfig();
    $$.data = {};
    $$.cache = {};
    $$.axes = {};
}

c3$1.generate = function (config) {
    return new Chart(config);
};

c3$1.chart = {
    fn: Chart.prototype,
    internal: {
        fn: ChartInternal.prototype,
        axis: {
            fn: Axis.prototype
        }
    }
};
c3_chart_fn = c3$1.chart.fn;
c3_chart_internal_fn = c3$1.chart.internal.fn;
c3_chart_internal_axis_fn = c3$1.chart.internal.axis.fn;

c3_chart_internal_fn.beforeInit = function () {
    // can do something
};
c3_chart_internal_fn.afterInit = function () {
    // can do something
};
c3_chart_internal_fn.init = function () {
    var $$ = this,
        config = $$.config;

    $$.initParams();

    if (config.data_url) {
        $$.convertUrlToData(config.data_url, config.data_mimeType, config.data_headers, config.data_keys, $$.initWithData);
    } else if (config.data_json) {
        $$.initWithData($$.convertJsonToData(config.data_json, config.data_keys));
    } else if (config.data_rows) {
        $$.initWithData($$.convertRowsToData(config.data_rows));
    } else if (config.data_columns) {
        $$.initWithData($$.convertColumnsToData(config.data_columns));
    } else {
        throw Error('url or json or rows or columns is required.');
    }
};

c3_chart_internal_fn.initParams = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;

    // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
    $$.clipId = "c3-" + +new Date() + '-clip', $$.clipIdForXAxis = $$.clipId + '-xaxis', $$.clipIdForYAxis = $$.clipId + '-yaxis', $$.clipIdForGrid = $$.clipId + '-grid', $$.clipIdForSubchart = $$.clipId + '-subchart', $$.clipPath = $$.getClipPath($$.clipId), $$.clipPathForXAxis = $$.getClipPath($$.clipIdForXAxis), $$.clipPathForYAxis = $$.getClipPath($$.clipIdForYAxis);
    $$.clipPathForGrid = $$.getClipPath($$.clipIdForGrid), $$.clipPathForSubchart = $$.getClipPath($$.clipIdForSubchart), $$.dragStart = null;
    $$.dragging = false;
    $$.flowing = false;
    $$.cancelClick = false;
    $$.mouseover = false;
    $$.transiting = false;

    $$.color = $$.generateColor();
    $$.levelColor = $$.generateLevelColor();

    $$.dataTimeFormat = config.data_xLocaltime ? d3.time.format : d3.time.format.utc;
    $$.axisTimeFormat = config.axis_x_localtime ? d3.time.format : d3.time.format.utc;
    $$.defaultAxisTimeFormat = $$.axisTimeFormat.multi([[".%L", function (d) {
        return d.getMilliseconds();
    }], [":%S", function (d) {
        return d.getSeconds();
    }], ["%I:%M", function (d) {
        return d.getMinutes();
    }], ["%I %p", function (d) {
        return d.getHours();
    }], ["%-m/%-d", function (d) {
        return d.getDay() && d.getDate() !== 1;
    }], ["%-m/%-d", function (d) {
        return d.getDate() !== 1;
    }], ["%-m/%-d", function (d) {
        return d.getMonth();
    }], ["%Y/%-m/%-d", function () {
        return true;
    }]]);

    $$.hiddenTargetIds = [];
    $$.hiddenLegendIds = [];
    $$.focusedTargetIds = [];
    $$.defocusedTargetIds = [];

    $$.xOrient = config.axis_rotated ? "left" : "bottom";
    $$.yOrient = config.axis_rotated ? config.axis_y_inner ? "top" : "bottom" : config.axis_y_inner ? "right" : "left";
    $$.y2Orient = config.axis_rotated ? config.axis_y2_inner ? "bottom" : "top" : config.axis_y2_inner ? "left" : "right";
    $$.subXOrient = config.axis_rotated ? "left" : "bottom";

    $$.isLegendRight = config.legend_position === 'right';
    $$.isLegendInset = config.legend_position === 'inset';
    $$.isLegendTop = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'top-right';
    $$.isLegendLeft = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'bottom-left';
    $$.legendStep = 0;
    $$.legendItemWidth = 0;
    $$.legendItemHeight = 0;

    $$.currentMaxTickWidths = {
        x: 0,
        y: 0,
        y2: 0
    };

    $$.rotated_padding_left = 30;
    $$.rotated_padding_right = config.axis_rotated && !config.axis_x_show ? 0 : 30;
    $$.rotated_padding_top = 5;

    $$.withoutFadeIn = {};

    $$.intervalForObserveInserted = undefined;

    $$.axes.subx = d3.selectAll([]); // needs when excluding subchart.js
};

c3_chart_internal_fn.initChartElements = function () {
    if (this.initBar) {
        this.initBar();
    }
    if (this.initLine) {
        this.initLine();
    }
    if (this.initArc) {
        this.initArc();
    }
    if (this.initGauge) {
        this.initGauge();
    }
    if (this.initText) {
        this.initText();
    }
};

c3_chart_internal_fn.initWithData = function (data) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;
    var defs,
        main,
        binding = true;

    $$.axis = new Axis($$);

    if ($$.initPie) {
        $$.initPie();
    }
    if ($$.initBrush) {
        $$.initBrush();
    }
    if ($$.initZoom) {
        $$.initZoom();
    }

    if (!config.bindto) {
        $$.selectChart = d3.selectAll([]);
    } else if (typeof config.bindto.node === 'function') {
        $$.selectChart = config.bindto;
    } else {
        $$.selectChart = d3.select(config.bindto);
    }
    if ($$.selectChart.empty()) {
        $$.selectChart = d3.select(document.createElement('div')).style('opacity', 0);
        $$.observeInserted($$.selectChart);
        binding = false;
    }
    $$.selectChart.html("").classed("c3", true);

    // Init data as targets
    $$.data.xs = {};
    $$.data.targets = $$.convertDataToTargets(data);

    if (config.data_filter) {
        $$.data.targets = $$.data.targets.filter(config.data_filter);
    }

    // Set targets to hide if needed
    if (config.data_hide) {
        $$.addHiddenTargetIds(config.data_hide === true ? $$.mapToIds($$.data.targets) : config.data_hide);
    }
    if (config.legend_hide) {
        $$.addHiddenLegendIds(config.legend_hide === true ? $$.mapToIds($$.data.targets) : config.legend_hide);
    }

    // when gauge, hide legend // TODO: fix
    if ($$.hasType('gauge')) {
        config.legend_show = false;
    }

    // Init sizes and scales
    $$.updateSizes();
    $$.updateScales();

    // Set domains for each scale
    $$.x.domain(d3.extent($$.getXDomain($$.data.targets)));
    $$.y.domain($$.getYDomain($$.data.targets, 'y'));
    $$.y2.domain($$.getYDomain($$.data.targets, 'y2'));
    $$.subX.domain($$.x.domain());
    $$.subY.domain($$.y.domain());
    $$.subY2.domain($$.y2.domain());

    // Save original x domain for zoom update
    $$.orgXDomain = $$.x.domain();

    // Set initialized scales to brush and zoom
    if ($$.brush) {
        $$.brush.scale($$.subX);
    }
    if (config.zoom_enabled) {
        $$.zoom.scale($$.x);
    }

    /*-- Basic Elements --*/

    // Define svgs
    $$.svg = $$.selectChart.append("svg").style("overflow", "hidden").on('mouseenter', function () {
        return config.onmouseover.call($$);
    }).on('mouseleave', function () {
        return config.onmouseout.call($$);
    });

    if ($$.config.svg_classname) {
        $$.svg.attr('class', $$.config.svg_classname);
    }

    // Define defs
    defs = $$.svg.append("defs");
    $$.clipChart = $$.appendClip(defs, $$.clipId);
    $$.clipXAxis = $$.appendClip(defs, $$.clipIdForXAxis);
    $$.clipYAxis = $$.appendClip(defs, $$.clipIdForYAxis);
    $$.clipGrid = $$.appendClip(defs, $$.clipIdForGrid);
    $$.clipSubchart = $$.appendClip(defs, $$.clipIdForSubchart);
    $$.updateSvgSize();

    // Define regions
    main = $$.main = $$.svg.append("g").attr("transform", $$.getTranslate('main'));

    if ($$.initSubchart) {
        $$.initSubchart();
    }
    if ($$.initTooltip) {
        $$.initTooltip();
    }
    if ($$.initLegend) {
        $$.initLegend();
    }
    if ($$.initTitle) {
        $$.initTitle();
    }

    /*-- Main Region --*/

    // text when empty
    main.append("text").attr("class", CLASS.text + ' ' + CLASS.empty).attr("text-anchor", "middle" // horizontal centering of text at x position in all browsers.
    ).attr("dominant-baseline", "middle"); // vertical centering of text at y position in all browsers, except IE.

    // Regions
    $$.initRegion();

    // Grids
    $$.initGrid();

    // Define g for chart area
    main.append('g').attr("clip-path", $$.clipPath).attr('class', CLASS.chart);

    // Grid lines
    if (config.grid_lines_front) {
        $$.initGridLines();
    }

    // Cover whole with rects for events
    $$.initEventRect();

    // Define g for chart
    $$.initChartElements();

    // if zoom privileged, insert rect to forefront
    // TODO: is this needed?
    main.insert('rect', config.zoom_privileged ? null : 'g.' + CLASS.regions).attr('class', CLASS.zoomRect).attr('width', $$.width).attr('height', $$.height).style('opacity', 0).on("dblclick.zoom", null);

    // Set default extent if defined
    if (config.axis_x_extent) {
        $$.brush.extent($$.getDefaultExtent());
    }

    // Add Axis
    $$.axis.init();

    // Set targets
    $$.updateTargets($$.data.targets);

    // Draw with targets
    if (binding) {
        $$.updateDimension();
        $$.config.oninit.call($$);
        $$.redraw({
            withTransition: false,
            withTransform: true,
            withUpdateXDomain: true,
            withUpdateOrgXDomain: true,
            withTransitionForAxis: false
        });
    }

    // Bind resize event
    $$.bindResize();

    // export element of the chart
    $$.api.element = $$.selectChart.node();
};

c3_chart_internal_fn.smoothLines = function (el, type) {
    var $$ = this;
    if (type === 'grid') {
        el.each(function () {
            var g = $$.d3.select(this),
                x1 = g.attr('x1'),
                x2 = g.attr('x2'),
                y1 = g.attr('y1'),
                y2 = g.attr('y2');
            g.attr({
                'x1': Math.ceil(x1),
                'x2': Math.ceil(x2),
                'y1': Math.ceil(y1),
                'y2': Math.ceil(y2)
            });
        });
    }
};

c3_chart_internal_fn.updateSizes = function () {
    var $$ = this,
        config = $$.config;
    var legendHeight = $$.legend ? $$.getLegendHeight() : 0,
        legendWidth = $$.legend ? $$.getLegendWidth() : 0,
        legendHeightForBottom = $$.isLegendRight || $$.isLegendInset ? 0 : legendHeight,
        hasArc = $$.hasArcType(),
        xAxisHeight = config.axis_rotated || hasArc ? 0 : $$.getHorizontalAxisHeight('x'),
        subchartHeight = config.subchart_show && !hasArc ? config.subchart_size_height + xAxisHeight : 0;

    $$.currentWidth = $$.getCurrentWidth();
    $$.currentHeight = $$.getCurrentHeight();

    // for main
    $$.margin = config.axis_rotated ? {
        top: $$.getHorizontalAxisHeight('y2') + $$.getCurrentPaddingTop(),
        right: hasArc ? 0 : $$.getCurrentPaddingRight(),
        bottom: $$.getHorizontalAxisHeight('y') + legendHeightForBottom + $$.getCurrentPaddingBottom(),
        left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
    } : {
        top: 4 + $$.getCurrentPaddingTop(), // for top tick text
        right: hasArc ? 0 : $$.getCurrentPaddingRight(),
        bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
        left: hasArc ? 0 : $$.getCurrentPaddingLeft()
    };

    // for subchart
    $$.margin2 = config.axis_rotated ? {
        top: $$.margin.top,
        right: NaN,
        bottom: 20 + legendHeightForBottom,
        left: $$.rotated_padding_left
    } : {
        top: $$.currentHeight - subchartHeight - legendHeightForBottom,
        right: NaN,
        bottom: xAxisHeight + legendHeightForBottom,
        left: $$.margin.left
    };

    // for legend
    $$.margin3 = {
        top: 0,
        right: NaN,
        bottom: 0,
        left: 0
    };
    if ($$.updateSizeForLegend) {
        $$.updateSizeForLegend(legendHeight, legendWidth);
    }

    $$.width = $$.currentWidth - $$.margin.left - $$.margin.right;
    $$.height = $$.currentHeight - $$.margin.top - $$.margin.bottom;
    if ($$.width < 0) {
        $$.width = 0;
    }
    if ($$.height < 0) {
        $$.height = 0;
    }

    $$.width2 = config.axis_rotated ? $$.margin.left - $$.rotated_padding_left - $$.rotated_padding_right : $$.width;
    $$.height2 = config.axis_rotated ? $$.height : $$.currentHeight - $$.margin2.top - $$.margin2.bottom;
    if ($$.width2 < 0) {
        $$.width2 = 0;
    }
    if ($$.height2 < 0) {
        $$.height2 = 0;
    }

    // for arc
    $$.arcWidth = $$.width - ($$.isLegendRight ? legendWidth + 10 : 0);
    $$.arcHeight = $$.height - ($$.isLegendRight ? 0 : 10);
    if ($$.hasType('gauge') && !config.gauge_fullCircle) {
        $$.arcHeight += $$.height - $$.getGaugeLabelHeight();
    }
    if ($$.updateRadius) {
        $$.updateRadius();
    }

    if ($$.isLegendRight && hasArc) {
        $$.margin3.left = $$.arcWidth / 2 + $$.radiusExpanded * 1.1;
    }
};

c3_chart_internal_fn.updateTargets = function (targets) {
    var $$ = this;

    /*-- Main --*/

    //-- Text --//
    $$.updateTargetsForText(targets);

    //-- Bar --//
    $$.updateTargetsForBar(targets);

    //-- Line --//
    $$.updateTargetsForLine(targets);

    //-- Arc --//
    if ($$.hasArcType() && $$.updateTargetsForArc) {
        $$.updateTargetsForArc(targets);
    }

    /*-- Sub --*/

    if ($$.updateTargetsForSubchart) {
        $$.updateTargetsForSubchart(targets);
    }

    // Fade-in each chart
    $$.showTargets();
};
c3_chart_internal_fn.showTargets = function () {
    var $$ = this;
    $$.svg.selectAll('.' + CLASS.target).filter(function (d) {
        return $$.isTargetToShow(d.id);
    }).transition().duration($$.config.transition_duration).style("opacity", 1);
};

c3_chart_internal_fn.redraw = function (options, transitions) {
    var $$ = this,
        main = $$.main,
        d3 = $$.d3,
        config = $$.config;
    var areaIndices = $$.getShapeIndices($$.isAreaType),
        barIndices = $$.getShapeIndices($$.isBarType),
        lineIndices = $$.getShapeIndices($$.isLineType);
    var withY, withSubchart, withTransition, withTransitionForExit, withTransitionForAxis, withTransform, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain, withLegend, withEventRect, withDimension, withUpdateXAxis;
    var hideAxis = $$.hasArcType();
    var drawArea, drawBar, drawLine, xForText, yForText;
    var duration, durationForExit, durationForAxis;
    var waitForDraw, flow;
    var targetsToShow = $$.filterTargetsToShow($$.data.targets),
        tickValues,
        i,
        intervalForCulling,
        xDomainForZoom;
    var xv = $$.xv.bind($$),
        cx,
        cy;

    options = options || {};
    withY = getOption(options, "withY", true);
    withSubchart = getOption(options, "withSubchart", true);
    withTransition = getOption(options, "withTransition", true);
    withTransform = getOption(options, "withTransform", false);
    withUpdateXDomain = getOption(options, "withUpdateXDomain", false);
    withUpdateOrgXDomain = getOption(options, "withUpdateOrgXDomain", false);
    withTrimXDomain = getOption(options, "withTrimXDomain", true);
    withUpdateXAxis = getOption(options, "withUpdateXAxis", withUpdateXDomain);
    withLegend = getOption(options, "withLegend", false);
    withEventRect = getOption(options, "withEventRect", true);
    withDimension = getOption(options, "withDimension", true);
    withTransitionForExit = getOption(options, "withTransitionForExit", withTransition);
    withTransitionForAxis = getOption(options, "withTransitionForAxis", withTransition);

    duration = withTransition ? config.transition_duration : 0;
    durationForExit = withTransitionForExit ? duration : 0;
    durationForAxis = withTransitionForAxis ? duration : 0;

    transitions = transitions || $$.axis.generateTransitions(durationForAxis);

    // update legend and transform each g
    if (withLegend && config.legend_show) {
        $$.updateLegend($$.mapToIds($$.data.targets), options, transitions);
    } else if (withDimension) {
        // need to update dimension (e.g. axis.y.tick.values) because y tick values should change
        // no need to update axis in it because they will be updated in redraw()
        $$.updateDimension(true);
    }

    // MEMO: needed for grids calculation
    if ($$.isCategorized() && targetsToShow.length === 0) {
        $$.x.domain([0, $$.axes.x.selectAll('.tick').size()]);
    }

    if (targetsToShow.length) {
        $$.updateXDomain(targetsToShow, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain);
        if (!config.axis_x_tick_values) {
            tickValues = $$.axis.updateXAxisTickValues(targetsToShow);
        }
    } else {
        $$.xAxis.tickValues([]);
        $$.subXAxis.tickValues([]);
    }

    if (config.zoom_rescale && !options.flow) {
        xDomainForZoom = $$.x.orgDomain();
    }

    $$.y.domain($$.getYDomain(targetsToShow, 'y', xDomainForZoom));
    $$.y2.domain($$.getYDomain(targetsToShow, 'y2', xDomainForZoom));

    if (!config.axis_y_tick_values && config.axis_y_tick_count) {
        $$.yAxis.tickValues($$.axis.generateTickValues($$.y.domain(), config.axis_y_tick_count));
    }
    if (!config.axis_y2_tick_values && config.axis_y2_tick_count) {
        $$.y2Axis.tickValues($$.axis.generateTickValues($$.y2.domain(), config.axis_y2_tick_count));
    }

    // axes
    $$.axis.redraw(transitions, hideAxis);

    // Update axis label
    $$.axis.updateLabels(withTransition);

    // show/hide if manual culling needed
    if ((withUpdateXDomain || withUpdateXAxis) && targetsToShow.length) {
        if (config.axis_x_tick_culling && tickValues) {
            for (i = 1; i < tickValues.length; i++) {
                if (tickValues.length / i < config.axis_x_tick_culling_max) {
                    intervalForCulling = i;
                    break;
                }
            }
            $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').each(function (e) {
                var index = tickValues.indexOf(e);
                if (index >= 0) {
                    d3.select(this).style('display', index % intervalForCulling ? 'none' : 'block');
                }
            });
        } else {
            $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').style('display', 'block');
        }
    }

    // setup drawer - MEMO: these must be called after axis updated
    drawArea = $$.generateDrawArea ? $$.generateDrawArea(areaIndices, false) : undefined;
    drawBar = $$.generateDrawBar ? $$.generateDrawBar(barIndices) : undefined;
    drawLine = $$.generateDrawLine ? $$.generateDrawLine(lineIndices, false) : undefined;
    xForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, true);
    yForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, false);

    // Update sub domain
    if (withY) {
        $$.subY.domain($$.getYDomain(targetsToShow, 'y'));
        $$.subY2.domain($$.getYDomain(targetsToShow, 'y2'));
    }

    // xgrid focus
    $$.updateXgridFocus();

    // Data empty label positioning and text.
    main.select("text." + CLASS.text + '.' + CLASS.empty).attr("x", $$.width / 2).attr("y", $$.height / 2).text(config.data_empty_label_text).transition().style('opacity', targetsToShow.length ? 0 : 1);

    // grid
    $$.updateGrid(duration);

    // rect for regions
    $$.updateRegion(duration);

    // bars
    $$.updateBar(durationForExit);

    // lines, areas and cricles
    $$.updateLine(durationForExit);
    $$.updateArea(durationForExit);
    $$.updateCircle();

    // text
    if ($$.hasDataLabel()) {
        $$.updateText(durationForExit);
    }

    // title
    if ($$.redrawTitle) {
        $$.redrawTitle();
    }

    // arc
    if ($$.redrawArc) {
        $$.redrawArc(duration, durationForExit, withTransform);
    }

    // subchart
    if ($$.redrawSubchart) {
        $$.redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices);
    }

    // circles for select
    main.selectAll('.' + CLASS.selectedCircles).filter($$.isBarType.bind($$)).selectAll('circle').remove();

    // event rects will redrawn when flow called
    if (config.interaction_enabled && !options.flow && withEventRect) {
        $$.redrawEventRect();
        if ($$.updateZoom) {
            $$.updateZoom();
        }
    }

    // update circleY based on updated parameters
    $$.updateCircleY();

    // generate circle x/y functions depending on updated params
    cx = ($$.config.axis_rotated ? $$.circleY : $$.circleX).bind($$);
    cy = ($$.config.axis_rotated ? $$.circleX : $$.circleY).bind($$);

    if (options.flow) {
        flow = $$.generateFlow({
            targets: targetsToShow,
            flow: options.flow,
            duration: options.flow.duration,
            drawBar: drawBar,
            drawLine: drawLine,
            drawArea: drawArea,
            cx: cx,
            cy: cy,
            xv: xv,
            xForText: xForText,
            yForText: yForText
        });
    }

    if ((duration || flow) && $$.isTabVisible()) {
        // Only use transition if tab visible. See #938.
        // transition should be derived from one transition
        d3.transition().duration(duration).each(function () {
            var transitionsToWait = [];

            // redraw and gather transitions
            [$$.redrawBar(drawBar, true), $$.redrawLine(drawLine, true), $$.redrawArea(drawArea, true), $$.redrawCircle(cx, cy, true), $$.redrawText(xForText, yForText, options.flow, true), $$.redrawRegion(true), $$.redrawGrid(true)].forEach(function (transitions) {
                transitions.forEach(function (transition) {
                    transitionsToWait.push(transition);
                });
            });

            // Wait for end of transitions to call flow and onrendered callback
            waitForDraw = $$.generateWait();
            transitionsToWait.forEach(function (t) {
                waitForDraw.add(t);
            });
        }).call(waitForDraw, function () {
            if (flow) {
                flow();
            }
            if (config.onrendered) {
                config.onrendered.call($$);
            }
        });
    } else {
        $$.redrawBar(drawBar);
        $$.redrawLine(drawLine);
        $$.redrawArea(drawArea);
        $$.redrawCircle(cx, cy);
        $$.redrawText(xForText, yForText, options.flow);
        $$.redrawRegion();
        $$.redrawGrid();
        if (config.onrendered) {
            config.onrendered.call($$);
        }
    }

    // update fadein condition
    $$.mapToIds($$.data.targets).forEach(function (id) {
        $$.withoutFadeIn[id] = true;
    });
};

c3_chart_internal_fn.updateAndRedraw = function (options) {
    var $$ = this,
        config = $$.config,
        transitions;
    options = options || {};
    // same with redraw
    options.withTransition = getOption(options, "withTransition", true);
    options.withTransform = getOption(options, "withTransform", false);
    options.withLegend = getOption(options, "withLegend", false);
    // NOT same with redraw
    options.withUpdateXDomain = true;
    options.withUpdateOrgXDomain = true;
    options.withTransitionForExit = false;
    options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition);
    // MEMO: this needs to be called before updateLegend and it means this ALWAYS needs to be called)
    $$.updateSizes();
    // MEMO: called in updateLegend in redraw if withLegend
    if (!(options.withLegend && config.legend_show)) {
        transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0);
        // Update scales
        $$.updateScales();
        $$.updateSvgSize();
        // Update g positions
        $$.transformAll(options.withTransitionForTransform, transitions);
    }
    // Draw with new sizes & scales
    $$.redraw(options, transitions);
};
c3_chart_internal_fn.redrawWithoutRescale = function () {
    this.redraw({
        withY: false,
        withSubchart: false,
        withEventRect: false,
        withTransitionForAxis: false
    });
};

c3_chart_internal_fn.isTimeSeries = function () {
    return this.config.axis_x_type === 'timeseries';
};
c3_chart_internal_fn.isCategorized = function () {
    return this.config.axis_x_type.indexOf('categor') >= 0;
};
c3_chart_internal_fn.isCustomX = function () {
    var $$ = this,
        config = $$.config;
    return !$$.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
};

c3_chart_internal_fn.isTimeSeriesY = function () {
    return this.config.axis_y_type === 'timeseries';
};

c3_chart_internal_fn.getTranslate = function (target) {
    var $$ = this,
        config = $$.config,
        x,
        y;
    if (target === 'main') {
        x = asHalfPixel($$.margin.left);
        y = asHalfPixel($$.margin.top);
    } else if (target === 'context') {
        x = asHalfPixel($$.margin2.left);
        y = asHalfPixel($$.margin2.top);
    } else if (target === 'legend') {
        x = $$.margin3.left;
        y = $$.margin3.top;
    } else if (target === 'x') {
        x = 0;
        y = config.axis_rotated ? 0 : $$.height;
    } else if (target === 'y') {
        x = 0;
        y = config.axis_rotated ? $$.height : 0;
    } else if (target === 'y2') {
        x = config.axis_rotated ? 0 : $$.width;
        y = config.axis_rotated ? 1 : 0;
    } else if (target === 'subx') {
        x = 0;
        y = config.axis_rotated ? 0 : $$.height2;
    } else if (target === 'arc') {
        x = $$.arcWidth / 2;
        y = $$.arcHeight / 2;
    }
    return "translate(" + x + "," + y + ")";
};
c3_chart_internal_fn.initialOpacity = function (d) {
    return d.value !== null && this.withoutFadeIn[d.id] ? 1 : 0;
};
c3_chart_internal_fn.initialOpacityForCircle = function (d) {
    return d.value !== null && this.withoutFadeIn[d.id] ? this.opacityForCircle(d) : 0;
};
c3_chart_internal_fn.opacityForCircle = function (d) {
    var isPointShouldBeShown = isFunction(this.config.point_show) ? this.config.point_show(d) : this.config.point_show;
    var opacity = isPointShouldBeShown ? 1 : 0;
    return isValue(d.value) ? this.isScatterType(d) ? 0.5 : opacity : 0;
};
c3_chart_internal_fn.opacityForText = function () {
    return this.hasDataLabel() ? 1 : 0;
};
c3_chart_internal_fn.xx = function (d) {
    return d ? this.x(d.x) : null;
};
c3_chart_internal_fn.xv = function (d) {
    var $$ = this,
        value = d.value;
    if ($$.isTimeSeries()) {
        value = $$.parseDate(d.value);
    } else if ($$.isCategorized() && typeof d.value === 'string') {
        value = $$.config.axis_x_categories.indexOf(d.value);
    }
    return Math.ceil($$.x(value));
};
c3_chart_internal_fn.yv = function (d) {
    var $$ = this,
        yScale = d.axis && d.axis === 'y2' ? $$.y2 : $$.y;
    return Math.ceil(yScale(d.value));
};
c3_chart_internal_fn.subxx = function (d) {
    return d ? this.subX(d.x) : null;
};

c3_chart_internal_fn.transformMain = function (withTransition, transitions) {
    var $$ = this,
        xAxis,
        yAxis,
        y2Axis;
    if (transitions && transitions.axisX) {
        xAxis = transitions.axisX;
    } else {
        xAxis = $$.main.select('.' + CLASS.axisX);
        if (withTransition) {
            xAxis = xAxis.transition();
        }
    }
    if (transitions && transitions.axisY) {
        yAxis = transitions.axisY;
    } else {
        yAxis = $$.main.select('.' + CLASS.axisY);
        if (withTransition) {
            yAxis = yAxis.transition();
        }
    }
    if (transitions && transitions.axisY2) {
        y2Axis = transitions.axisY2;
    } else {
        y2Axis = $$.main.select('.' + CLASS.axisY2);
        if (withTransition) {
            y2Axis = y2Axis.transition();
        }
    }
    (withTransition ? $$.main.transition() : $$.main).attr("transform", $$.getTranslate('main'));
    xAxis.attr("transform", $$.getTranslate('x'));
    yAxis.attr("transform", $$.getTranslate('y'));
    y2Axis.attr("transform", $$.getTranslate('y2'));
    $$.main.select('.' + CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
};
c3_chart_internal_fn.transformAll = function (withTransition, transitions) {
    var $$ = this;
    $$.transformMain(withTransition, transitions);
    if ($$.config.subchart_show) {
        $$.transformContext(withTransition, transitions);
    }
    if ($$.legend) {
        $$.transformLegend(withTransition);
    }
};

c3_chart_internal_fn.updateSvgSize = function () {
    var $$ = this,
        brush = $$.svg.select(".c3-brush .background");
    $$.svg.attr('width', $$.currentWidth).attr('height', $$.currentHeight);
    $$.svg.selectAll(['#' + $$.clipId, '#' + $$.clipIdForGrid]).select('rect').attr('width', $$.width).attr('height', $$.height);
    $$.svg.select('#' + $$.clipIdForXAxis).select('rect').attr('x', $$.getXAxisClipX.bind($$)).attr('y', $$.getXAxisClipY.bind($$)).attr('width', $$.getXAxisClipWidth.bind($$)).attr('height', $$.getXAxisClipHeight.bind($$));
    $$.svg.select('#' + $$.clipIdForYAxis).select('rect').attr('x', $$.getYAxisClipX.bind($$)).attr('y', $$.getYAxisClipY.bind($$)).attr('width', $$.getYAxisClipWidth.bind($$)).attr('height', $$.getYAxisClipHeight.bind($$));
    $$.svg.select('#' + $$.clipIdForSubchart).select('rect').attr('width', $$.width).attr('height', brush.size() ? brush.attr('height') : 0);
    $$.svg.select('.' + CLASS.zoomRect).attr('width', $$.width).attr('height', $$.height);
    // MEMO: parent div's height will be bigger than svg when <!DOCTYPE html>
    $$.selectChart.style('max-height', $$.currentHeight + "px");
};

c3_chart_internal_fn.updateDimension = function (withoutAxis) {
    var $$ = this;
    if (!withoutAxis) {
        if ($$.config.axis_rotated) {
            $$.axes.x.call($$.xAxis);
            $$.axes.subx.call($$.subXAxis);
        } else {
            $$.axes.y.call($$.yAxis);
            $$.axes.y2.call($$.y2Axis);
        }
    }
    $$.updateSizes();
    $$.updateScales();
    $$.updateSvgSize();
    $$.transformAll(false);
};

c3_chart_internal_fn.observeInserted = function (selection) {
    var $$ = this,
        observer;
    if (typeof MutationObserver === 'undefined') {
        window.console.error("MutationObserver not defined.");
        return;
    }
    observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.previousSibling) {
                observer.disconnect();
                // need to wait for completion of load because size calculation requires the actual sizes determined after that completion
                $$.intervalForObserveInserted = window.setInterval(function () {
                    // parentNode will NOT be null when completed
                    if (selection.node().parentNode) {
                        window.clearInterval($$.intervalForObserveInserted);
                        $$.updateDimension();
                        if ($$.brush) {
                            $$.brush.update();
                        }
                        $$.config.oninit.call($$);
                        $$.redraw({
                            withTransform: true,
                            withUpdateXDomain: true,
                            withUpdateOrgXDomain: true,
                            withTransition: false,
                            withTransitionForTransform: false,
                            withLegend: true
                        });
                        selection.transition().style('opacity', 1);
                    }
                }, 10);
            }
        });
    });
    observer.observe(selection.node(), { attributes: true, childList: true, characterData: true });
};

c3_chart_internal_fn.bindResize = function () {
    var $$ = this,
        config = $$.config;

    $$.resizeFunction = $$.generateResize();

    $$.resizeFunction.add(function () {
        config.onresize.call($$);
    });
    if (config.resize_auto) {
        $$.resizeFunction.add(function () {
            if ($$.resizeTimeout !== undefined) {
                window.clearTimeout($$.resizeTimeout);
            }
            $$.resizeTimeout = window.setTimeout(function () {
                delete $$.resizeTimeout;
                $$.api.flush();
            }, 100);
        });
    }
    $$.resizeFunction.add(function () {
        config.onresized.call($$);
    });

    if (window.attachEvent) {
        window.attachEvent('onresize', $$.resizeFunction);
    } else if (window.addEventListener) {
        window.addEventListener('resize', $$.resizeFunction, false);
    } else {
        // fallback to this, if this is a very old browser
        var wrapper = window.onresize;
        if (!wrapper) {
            // create a wrapper that will call all charts
            wrapper = $$.generateResize();
        } else if (!wrapper.add || !wrapper.remove) {
            // there is already a handler registered, make sure we call it too
            wrapper = $$.generateResize();
            wrapper.add(window.onresize);
        }
        // add this graph to the wrapper, we will be removed if the user calls destroy
        wrapper.add($$.resizeFunction);
        window.onresize = wrapper;
    }
};

c3_chart_internal_fn.generateResize = function () {
    var resizeFunctions = [];
    function callResizeFunctions() {
        resizeFunctions.forEach(function (f) {
            f();
        });
    }
    callResizeFunctions.add = function (f) {
        resizeFunctions.push(f);
    };
    callResizeFunctions.remove = function (f) {
        for (var i = 0; i < resizeFunctions.length; i++) {
            if (resizeFunctions[i] === f) {
                resizeFunctions.splice(i, 1);
                break;
            }
        }
    };
    return callResizeFunctions;
};

c3_chart_internal_fn.endall = function (transition, callback) {
    var n = 0;
    transition.each(function () {
        ++n;
    }).each("end", function () {
        if (! --n) {
            callback.apply(this, arguments);
        }
    });
};
c3_chart_internal_fn.generateWait = function () {
    var transitionsToWait = [],
        f = function f(transition, callback) {
        var timer = setInterval(function () {
            var done = 0;
            transitionsToWait.forEach(function (t) {
                if (t.empty()) {
                    done += 1;
                    return;
                }
                try {
                    t.transition();
                } catch (e) {
                    done += 1;
                }
            });
            if (done === transitionsToWait.length) {
                clearInterval(timer);
                if (callback) {
                    callback();
                }
            }
        }, 10);
    };
    f.add = function (transition) {
        transitionsToWait.push(transition);
    };
    return f;
};

c3_chart_internal_fn.parseDate = function (date) {
    var $$ = this,
        parsedDate;
    if (date instanceof Date) {
        parsedDate = date;
    } else if (typeof date === 'string') {
        parsedDate = $$.dataTimeFormat($$.config.data_xFormat).parse(date);
    } else if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object') {
        parsedDate = new Date(+date);
    } else if (typeof date === 'number' && !isNaN(date)) {
        parsedDate = new Date(+date);
    }
    if (!parsedDate || isNaN(+parsedDate)) {
        window.console.error("Failed to parse x '" + date + "' to Date object");
    }
    return parsedDate;
};

c3_chart_internal_fn.isTabVisible = function () {
    var hidden;
    if (typeof document.hidden !== "undefined") {
        // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
    }

    return document[hidden] ? false : true;
};

c3_chart_internal_fn.isValue = isValue;
c3_chart_internal_fn.isFunction = isFunction;
c3_chart_internal_fn.isString = isString;
c3_chart_internal_fn.isUndefined = isUndefined;
c3_chart_internal_fn.isDefined = isDefined;
c3_chart_internal_fn.ceil10 = ceil10;
c3_chart_internal_fn.asHalfPixel = asHalfPixel;
c3_chart_internal_fn.diffDomain = diffDomain;
c3_chart_internal_fn.isEmpty = isEmpty;
c3_chart_internal_fn.notEmpty = notEmpty;
c3_chart_internal_fn.notEmpty = notEmpty;
c3_chart_internal_fn.getOption = getOption;
c3_chart_internal_fn.hasValue = hasValue;
c3_chart_internal_fn.sanitise = sanitise;
c3_chart_internal_fn.getPathBox = getPathBox;
c3_chart_internal_fn.CLASS = CLASS;

/* jshint ignore:start */

// PhantomJS doesn't have support for Function.prototype.bind, which has caused confusion. Use
// this polyfill to avoid the confusion.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function fNOP() {},
            fBound = function fBound() {
            return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function () {
    "use strict";

    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function (type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        };

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function () {
            if (this._owningPathSegList) this._owningPathSegList.segmentChanged(this);
        };

        window.SVGPathSegClosePath = function (owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        };
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function () {
            return "[object SVGPathSegClosePath]";
        };
        window.SVGPathSegClosePath.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter;
        };
        window.SVGPathSegClosePath.prototype.clone = function () {
            return new window.SVGPathSegClosePath(undefined);
        };

        window.SVGPathSegMovetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function () {
            return "[object SVGPathSegMovetoAbs]";
        };
        window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegMovetoAbs.prototype.clone = function () {
            return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegMovetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function () {
            return "[object SVGPathSegMovetoRel]";
        };
        window.SVGPathSegMovetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegMovetoRel.prototype.clone = function () {
            return new window.SVGPathSegMovetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoAbs]";
        };
        window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegLinetoAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoRel]";
        };
        window.SVGPathSegLinetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegLinetoRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicAbs]";
        };
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function (owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicRel]";
        };
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function (owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticRel]";
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function get() {
                return this._x1;
            }, set: function set(x1) {
                this._x1 = x1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function get() {
                return this._y1;
            }, set: function set(y1) {
                this._y1 = y1;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegArcAbs = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        };
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function () {
            return "[object SVGPathSegArcAbs]";
        };
        window.SVGPathSegArcAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        };
        window.SVGPathSegArcAbs.prototype.clone = function () {
            return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        };
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function get() {
                return this._r1;
            }, set: function set(r1) {
                this._r1 = r1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function get() {
                return this._r2;
            }, set: function set(r2) {
                this._r2 = r2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function get() {
                return this._angle;
            }, set: function set(angle) {
                this._angle = angle;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function get() {
                return this._largeArcFlag;
            }, set: function set(largeArcFlag) {
                this._largeArcFlag = largeArcFlag;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function get() {
                return this._sweepFlag;
            }, set: function set(sweepFlag) {
                this._sweepFlag = sweepFlag;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegArcRel = function (owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        };
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function () {
            return "[object SVGPathSegArcRel]";
        };
        window.SVGPathSegArcRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
        };
        window.SVGPathSegArcRel.prototype.clone = function () {
            return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
        };
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function get() {
                return this._r1;
            }, set: function set(r1) {
                this._r1 = r1;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function get() {
                return this._r2;
            }, set: function set(r2) {
                this._r2 = r2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function get() {
                return this._angle;
            }, set: function set(angle) {
                this._angle = angle;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function get() {
                return this._largeArcFlag;
            }, set: function set(largeArcFlag) {
                this._largeArcFlag = largeArcFlag;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function get() {
                return this._sweepFlag;
            }, set: function set(sweepFlag) {
                this._sweepFlag = sweepFlag;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalAbs]";
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x);
        };
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function (owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        };
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalRel]";
        };
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x);
        };
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        };
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalAbs]";
        };
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function (owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        };
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalRel]";
        };
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalRel(undefined, this._y);
        };
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function (owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2);
        };
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function get() {
                return this._x2;
            }, set: function set(x2) {
                this._x2 = x2;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function get() {
                return this._y2;
            }, set: function set(y2) {
                this._y2 = y2;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function (owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y);
        };
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function get() {
                return this._x;
            }, set: function set(x) {
                this._x = x;this._segmentChanged();
            }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function get() {
                return this._y;
            }, set: function set(y) {
                this._y = y;this._segmentChanged();
            }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
            return new window.SVGPathSegClosePath(undefined);
        };
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (x, y) {
            return new window.SVGPathSegMovetoAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (x, y) {
            return new window.SVGPathSegMovetoRel(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (x, y) {
            return new window.SVGPathSegLinetoAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (x, y) {
            return new window.SVGPathSegLinetoRel(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (x, y, x1, y1, x2, y2) {
            return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (x, y, x1, y1) {
            return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1);
        };
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
        };
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (x) {
            return new window.SVGPathSegLinetoHorizontalAbs(undefined, x);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (x) {
            return new window.SVGPathSegLinetoHorizontalRel(undefined, x);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (y) {
            return new window.SVGPathSegLinetoVerticalAbs(undefined, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (y) {
            return new window.SVGPathSegLinetoVerticalRel(undefined, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (x, y, x2, y2) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y);
        };
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (x, y) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y);
        };

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function (distance) {
                if (distance === undefined || !isFinite(distance)) throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0) return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength()) break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            };
        }
    }

    if (!("SVGPathSegList" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function (pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        };

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function get() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function get() {
                if (!this._pathSegList) this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function get() {
                return this.pathSegList;
            }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        };

        window.SVGPathSegList.prototype._updateListFromPathMutations = function (mutationRecords) {
            if (!this._pathElement) return;
            var hasPathMutations = false;
            mutationRecords.forEach(function (record) {
                if (record.attributeName == "d") hasPathMutations = true;
            });
            if (hasPathMutations) this._list = this._parsePath(this._pathElement.getAttribute("d"));
        };

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        };

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function (pathSeg) {
            this._writeListToPath();
        };

        window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList();

            this._list.forEach(function (pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        };

        window.SVGPathSegList.prototype.initialize = function (newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype._checkValidIndex = function (index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems) throw "INDEX_SIZE_ERR";
        };

        window.SVGPathSegList.prototype.getItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        };

        window.SVGPathSegList.prototype.insertItemBefore = function (newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems) index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype.replaceItem = function (newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList.prototype.removeItem = function (index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        };

        window.SVGPathSegList.prototype.appendItem = function (newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        };

        window.SVGPathSegList._pathSegArrayAsString = function (pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function (pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        };

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function (string) {
            if (!string || string.length == 0) return [];

            var owningPathSegList = this;

            var Builder = function Builder() {
                this.pathSegList = [];
            };

            Builder.prototype.appendSegment = function (pathSeg) {
                this.pathSegList.push(pathSeg);
            };

            var Source = function Source(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            };

            Source.prototype._isCurrentSpace = function () {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            };

            Source.prototype._skipOptionalSpaces = function () {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
                    this._currentIndex++;
                }return this._currentIndex < this._endIndex;
            };

            Source.prototype._skipOptionalSpacesOrDelimiter = function () {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",") return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            };

            Source.prototype.hasMoreData = function () {
                return this._currentIndex < this._endIndex;
            };

            Source.prototype.peekSegmentType = function () {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            };

            Source.prototype._pathSegTypeFromChar = function (lookahead) {
                switch (lookahead) {
                    case "Z":
                    case "z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            };

            Source.prototype._nextCommandHelper = function (lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS) return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL) return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            };

            Source.prototype.initialCommandIsMoveTo = function () {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData()) return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            };

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function () {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+") this._currentIndex++;else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".")
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                    this._currentIndex++;
                } // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += this._string.charAt(this._currentIndex) - "0";
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent) number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex) return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            };

            Source.prototype._parseArcFlag = function () {
                if (this._currentIndex >= this._endIndex) return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0") flag = false;else if (flagChar == "1") flag = true;else return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            };

            Source.prototype.parseSegment = function () {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        this._skipOptionalSpaces();
                        return new window.SVGPathSegClosePath(owningPathSegList);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        var points = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        var points = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() };
                        return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                    default:
                        throw "Unknown path seg type.";
                }
            };

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo()) return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg) return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        };
    }
})();

/* jshint ignore:end */

c3_chart_fn.axis = function () {};
c3_chart_fn.axis.labels = function (labels) {
    var $$ = this.internal;
    if (arguments.length) {
        Object.keys(labels).forEach(function (axisId) {
            $$.axis.setLabelText(axisId, labels[axisId]);
        });
        $$.axis.updateLabels();
    }
    // TODO: return some values?
};
c3_chart_fn.axis.max = function (max) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length) {
        if ((typeof max === 'undefined' ? 'undefined' : _typeof(max)) === 'object') {
            if (isValue(max.x)) {
                config.axis_x_max = max.x;
            }
            if (isValue(max.y)) {
                config.axis_y_max = max.y;
            }
            if (isValue(max.y2)) {
                config.axis_y2_max = max.y2;
            }
        } else {
            config.axis_y_max = config.axis_y2_max = max;
        }
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    } else {
        return {
            x: config.axis_x_max,
            y: config.axis_y_max,
            y2: config.axis_y2_max
        };
    }
};
c3_chart_fn.axis.min = function (min) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length) {
        if ((typeof min === 'undefined' ? 'undefined' : _typeof(min)) === 'object') {
            if (isValue(min.x)) {
                config.axis_x_min = min.x;
            }
            if (isValue(min.y)) {
                config.axis_y_min = min.y;
            }
            if (isValue(min.y2)) {
                config.axis_y2_min = min.y2;
            }
        } else {
            config.axis_y_min = config.axis_y2_min = min;
        }
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    } else {
        return {
            x: config.axis_x_min,
            y: config.axis_y_min,
            y2: config.axis_y2_min
        };
    }
};
c3_chart_fn.axis.range = function (range) {
    if (arguments.length) {
        if (isDefined(range.max)) {
            this.axis.max(range.max);
        }
        if (isDefined(range.min)) {
            this.axis.min(range.min);
        }
    } else {
        return {
            max: this.axis.max(),
            min: this.axis.min()
        };
    }
};

c3_chart_fn.category = function (i, category) {
    var $$ = this.internal,
        config = $$.config;
    if (arguments.length > 1) {
        config.axis_x_categories[i] = category;
        $$.redraw();
    }
    return config.axis_x_categories[i];
};
c3_chart_fn.categories = function (categories) {
    var $$ = this.internal,
        config = $$.config;
    if (!arguments.length) {
        return config.axis_x_categories;
    }
    config.axis_x_categories = categories;
    $$.redraw();
    return config.axis_x_categories;
};

c3_chart_fn.resize = function (size) {
    var $$ = this.internal,
        config = $$.config;
    config.size_width = size ? size.width : null;
    config.size_height = size ? size.height : null;
    this.flush();
};

c3_chart_fn.flush = function () {
    var $$ = this.internal;
    $$.updateAndRedraw({ withLegend: true, withTransition: false, withTransitionForTransform: false });
};

c3_chart_fn.destroy = function () {
    var $$ = this.internal;

    window.clearInterval($$.intervalForObserveInserted);

    if ($$.resizeTimeout !== undefined) {
        window.clearTimeout($$.resizeTimeout);
    }

    if (window.detachEvent) {
        window.detachEvent('onresize', $$.resizeFunction);
    } else if (window.removeEventListener) {
        window.removeEventListener('resize', $$.resizeFunction);
    } else {
        var wrapper = window.onresize;
        // check if no one else removed our wrapper and remove our resizeFunction from it
        if (wrapper && wrapper.add && wrapper.remove) {
            wrapper.remove($$.resizeFunction);
        }
    }

    $$.selectChart.classed('c3', false).html("");

    // MEMO: this is needed because the reference of some elements will not be released, then memory leak will happen.
    Object.keys($$).forEach(function (key) {
        $$[key] = null;
    });

    return null;
};

// TODO: fix
c3_chart_fn.color = function (id) {
    var $$ = this.internal;
    return $$.color(id); // more patterns
};

c3_chart_fn.data = function (targetIds) {
    var targets = this.internal.data.targets;
    return typeof targetIds === 'undefined' ? targets : targets.filter(function (t) {
        return [].concat(targetIds).indexOf(t.id) >= 0;
    });
};
c3_chart_fn.data.shown = function (targetIds) {
    return this.internal.filterTargetsToShow(this.data(targetIds));
};
c3_chart_fn.data.values = function (targetId) {
    var targets,
        values = null;
    if (targetId) {
        targets = this.data(targetId);
        values = targets[0] ? targets[0].values.map(function (d) {
            return d.value;
        }) : null;
    }
    return values;
};
c3_chart_fn.data.names = function (names) {
    this.internal.clearLegendItemTextBoxCache();
    return this.internal.updateDataAttributes('names', names);
};
c3_chart_fn.data.colors = function (colors) {
    return this.internal.updateDataAttributes('colors', colors);
};
c3_chart_fn.data.axes = function (axes) {
    return this.internal.updateDataAttributes('axes', axes);
};

c3_chart_fn.flow = function (args) {
    var $$ = this.internal,
        targets,
        data,
        notfoundIds = [],
        orgDataCount = $$.getMaxDataCount(),
        dataCount,
        domain,
        baseTarget,
        baseValue,
        length = 0,
        tail = 0,
        diff,
        to;

    if (args.json) {
        data = $$.convertJsonToData(args.json, args.keys);
    } else if (args.rows) {
        data = $$.convertRowsToData(args.rows);
    } else if (args.columns) {
        data = $$.convertColumnsToData(args.columns);
    } else {
        return;
    }
    targets = $$.convertDataToTargets(data, true);

    // Update/Add data
    $$.data.targets.forEach(function (t) {
        var found = false,
            i,
            j;
        for (i = 0; i < targets.length; i++) {
            if (t.id === targets[i].id) {
                found = true;

                if (t.values[t.values.length - 1]) {
                    tail = t.values[t.values.length - 1].index + 1;
                }
                length = targets[i].values.length;

                for (j = 0; j < length; j++) {
                    targets[i].values[j].index = tail + j;
                    if (!$$.isTimeSeries()) {
                        targets[i].values[j].x = tail + j;
                    }
                }
                t.values = t.values.concat(targets[i].values);

                targets.splice(i, 1);
                break;
            }
        }
        if (!found) {
            notfoundIds.push(t.id);
        }
    });

    // Append null for not found targets
    $$.data.targets.forEach(function (t) {
        var i, j;
        for (i = 0; i < notfoundIds.length; i++) {
            if (t.id === notfoundIds[i]) {
                tail = t.values[t.values.length - 1].index + 1;
                for (j = 0; j < length; j++) {
                    t.values.push({
                        id: t.id,
                        index: tail + j,
                        x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + j) : tail + j,
                        value: null
                    });
                }
            }
        }
    });

    // Generate null values for new target
    if ($$.data.targets.length) {
        targets.forEach(function (t) {
            var i,
                missing = [];
            for (i = $$.data.targets[0].values[0].index; i < tail; i++) {
                missing.push({
                    id: t.id,
                    index: i,
                    x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
                    value: null
                });
            }
            t.values.forEach(function (v) {
                v.index += tail;
                if (!$$.isTimeSeries()) {
                    v.x += tail;
                }
            });
            t.values = missing.concat(t.values);
        });
    }
    $$.data.targets = $$.data.targets.concat(targets); // add remained

    // check data count because behavior needs to change when it's only one
    dataCount = $$.getMaxDataCount();
    baseTarget = $$.data.targets[0];
    baseValue = baseTarget.values[0];

    // Update length to flow if needed
    if (isDefined(args.to)) {
        length = 0;
        to = $$.isTimeSeries() ? $$.parseDate(args.to) : args.to;
        baseTarget.values.forEach(function (v) {
            if (v.x < to) {
                length++;
            }
        });
    } else if (isDefined(args.length)) {
        length = args.length;
    }

    // If only one data, update the domain to flow from left edge of the chart
    if (!orgDataCount) {
        if ($$.isTimeSeries()) {
            if (baseTarget.values.length > 1) {
                diff = baseTarget.values[baseTarget.values.length - 1].x - baseValue.x;
            } else {
                diff = baseValue.x - $$.getXDomain($$.data.targets)[0];
            }
        } else {
            diff = 1;
        }
        domain = [baseValue.x - diff, baseValue.x];
        $$.updateXDomain(null, true, true, false, domain);
    } else if (orgDataCount === 1) {
        if ($$.isTimeSeries()) {
            diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
            domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
            $$.updateXDomain(null, true, true, false, domain);
        }
    }

    // Set targets
    $$.updateTargets($$.data.targets);

    // Redraw with new targets
    $$.redraw({
        flow: {
            index: baseValue.index,
            length: length,
            duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
            done: args.done,
            orgDataCount: orgDataCount
        },
        withLegend: true,
        withTransition: orgDataCount > 1,
        withTrimXDomain: false,
        withUpdateXAxis: true
    });
};

c3_chart_internal_fn.generateFlow = function (args) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;

    return function () {
        var targets = args.targets,
            flow = args.flow,
            drawBar = args.drawBar,
            drawLine = args.drawLine,
            drawArea = args.drawArea,
            cx = args.cx,
            cy = args.cy,
            xv = args.xv,
            xForText = args.xForText,
            yForText = args.yForText,
            duration = args.duration;

        var translateX,
            scaleX = 1,
            transform,
            flowIndex = flow.index,
            flowLength = flow.length,
            flowStart = $$.getValueOnIndex($$.data.targets[0].values, flowIndex),
            flowEnd = $$.getValueOnIndex($$.data.targets[0].values, flowIndex + flowLength),
            orgDomain = $$.x.domain(),
            domain,
            durationForFlow = flow.duration || duration,
            done = flow.done || function () {},
            wait = $$.generateWait();

        var xgrid = $$.xgrid || d3.selectAll([]),
            xgridLines = $$.xgridLines || d3.selectAll([]),
            mainRegion = $$.mainRegion || d3.selectAll([]),
            mainText = $$.mainText || d3.selectAll([]),
            mainBar = $$.mainBar || d3.selectAll([]),
            mainLine = $$.mainLine || d3.selectAll([]),
            mainArea = $$.mainArea || d3.selectAll([]),
            mainCircle = $$.mainCircle || d3.selectAll([]);

        // set flag
        $$.flowing = true;

        // remove head data after rendered
        $$.data.targets.forEach(function (d) {
            d.values.splice(0, flowLength);
        });

        // update x domain to generate axis elements for flow
        domain = $$.updateXDomain(targets, true, true);
        // update elements related to x scale
        if ($$.updateXGrid) {
            $$.updateXGrid(true);
        }

        // generate transform to flow
        if (!flow.orgDataCount) {
            // if empty
            if ($$.data.targets[0].values.length !== 1) {
                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
            } else {
                if ($$.isTimeSeries()) {
                    flowStart = $$.getValueOnIndex($$.data.targets[0].values, 0);
                    flowEnd = $$.getValueOnIndex($$.data.targets[0].values, $$.data.targets[0].values.length - 1);
                    translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
                } else {
                    translateX = diffDomain(domain) / 2;
                }
            }
        } else if (flow.orgDataCount === 1 || (flowStart && flowStart.x) === (flowEnd && flowEnd.x)) {
            translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
        } else {
            if ($$.isTimeSeries()) {
                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
            } else {
                translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
            }
        }
        scaleX = diffDomain(orgDomain) / diffDomain(domain);
        transform = 'translate(' + translateX + ',0) scale(' + scaleX + ',1)';

        $$.hideXGridFocus();

        d3.transition().ease('linear').duration(durationForFlow).each(function () {
            wait.add($$.axes.x.transition().call($$.xAxis));
            wait.add(mainBar.transition().attr('transform', transform));
            wait.add(mainLine.transition().attr('transform', transform));
            wait.add(mainArea.transition().attr('transform', transform));
            wait.add(mainCircle.transition().attr('transform', transform));
            wait.add(mainText.transition().attr('transform', transform));
            wait.add(mainRegion.filter($$.isRegionOnX).transition().attr('transform', transform));
            wait.add(xgrid.transition().attr('transform', transform));
            wait.add(xgridLines.transition().attr('transform', transform));
        }).call(wait, function () {
            var i,
                shapes = [],
                texts = [],
                eventRects = [];

            // remove flowed elements
            if (flowLength) {
                for (i = 0; i < flowLength; i++) {
                    shapes.push('.' + CLASS.shape + '-' + (flowIndex + i));
                    texts.push('.' + CLASS.text + '-' + (flowIndex + i));
                    eventRects.push('.' + CLASS.eventRect + '-' + (flowIndex + i));
                }
                $$.svg.selectAll('.' + CLASS.shapes).selectAll(shapes).remove();
                $$.svg.selectAll('.' + CLASS.texts).selectAll(texts).remove();
                $$.svg.selectAll('.' + CLASS.eventRects).selectAll(eventRects).remove();
                $$.svg.select('.' + CLASS.xgrid).remove();
            }

            // draw again for removing flowed elements and reverting attr
            xgrid.attr('transform', null).attr($$.xgridAttr);
            xgridLines.attr('transform', null);
            xgridLines.select('line').attr("x1", config.axis_rotated ? 0 : xv).attr("x2", config.axis_rotated ? $$.width : xv);
            xgridLines.select('text').attr("x", config.axis_rotated ? $$.width : 0).attr("y", xv);
            mainBar.attr('transform', null).attr("d", drawBar);
            mainLine.attr('transform', null).attr("d", drawLine);
            mainArea.attr('transform', null).attr("d", drawArea);
            mainCircle.attr('transform', null).attr("cx", cx).attr("cy", cy);
            mainText.attr('transform', null).attr('x', xForText).attr('y', yForText).style('fill-opacity', $$.opacityForText.bind($$));
            mainRegion.attr('transform', null);
            mainRegion.select('rect').filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$));

            if (config.interaction_enabled) {
                $$.redrawEventRect();
            }

            // callback for end of flow
            done();

            $$.flowing = false;
        });
    };
};

c3_chart_fn.focus = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))), this.revert();
    this.defocus();
    candidates.classed(CLASS.focused, true).classed(CLASS.defocused, false);
    if ($$.hasArcType()) {
        $$.expandArc(targetIds);
    }
    $$.toggleFocusLegend(targetIds, true);

    $$.focusedTargetIds = targetIds;
    $$.defocusedTargetIds = $$.defocusedTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};

c3_chart_fn.defocus = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))), candidates.classed(CLASS.focused, false).classed(CLASS.defocused, true);
    if ($$.hasArcType()) {
        $$.unexpandArc(targetIds);
    }
    $$.toggleFocusLegend(targetIds, false);

    $$.focusedTargetIds = $$.focusedTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
    $$.defocusedTargetIds = targetIds;
};

c3_chart_fn.revert = function (targetIds) {
    var $$ = this.internal,
        candidates;

    targetIds = $$.mapToTargetIds(targetIds);
    candidates = $$.svg.selectAll($$.selectorTargets(targetIds)); // should be for all targets

    candidates.classed(CLASS.focused, false).classed(CLASS.defocused, false);
    if ($$.hasArcType()) {
        $$.unexpandArc(targetIds);
    }
    if ($$.config.legend_show) {
        $$.showLegend(targetIds.filter($$.isLegendToShow.bind($$)));
        $$.legend.selectAll($$.selectorLegends(targetIds)).filter(function () {
            return $$.d3.select(this).classed(CLASS.legendItemFocused);
        }).classed(CLASS.legendItemFocused, false);
    }

    $$.focusedTargetIds = [];
    $$.defocusedTargetIds = [];
};

c3_chart_fn.xgrids = function (grids) {
    var $$ = this.internal,
        config = $$.config;
    if (!grids) {
        return config.grid_x_lines;
    }
    config.grid_x_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_x_lines;
};
c3_chart_fn.xgrids.add = function (grids) {
    var $$ = this.internal;
    return this.xgrids($$.config.grid_x_lines.concat(grids ? grids : []));
};
c3_chart_fn.xgrids.remove = function (params) {
    // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, true);
};

c3_chart_fn.ygrids = function (grids) {
    var $$ = this.internal,
        config = $$.config;
    if (!grids) {
        return config.grid_y_lines;
    }
    config.grid_y_lines = grids;
    $$.redrawWithoutRescale();
    return config.grid_y_lines;
};
c3_chart_fn.ygrids.add = function (grids) {
    var $$ = this.internal;
    return this.ygrids($$.config.grid_y_lines.concat(grids ? grids : []));
};
c3_chart_fn.ygrids.remove = function (params) {
    // TODO: multiple
    var $$ = this.internal;
    $$.removeGridLines(params, false);
};

c3_chart_fn.groups = function (groups) {
    var $$ = this.internal,
        config = $$.config;
    if (isUndefined(groups)) {
        return config.data_groups;
    }
    config.data_groups = groups;
    $$.redraw();
    return config.data_groups;
};

c3_chart_fn.legend = function () {};
c3_chart_fn.legend.show = function (targetIds) {
    var $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
};
c3_chart_fn.legend.hide = function (targetIds) {
    var $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
};

c3_chart_fn.load = function (args) {
    var $$ = this.internal,
        config = $$.config;
    // update xs if specified
    if (args.xs) {
        $$.addXs(args.xs);
    }
    // update names if exists
    if ('names' in args) {
        c3_chart_fn.data.names.bind(this)(args.names);
    }
    // update classes if exists
    if ('classes' in args) {
        Object.keys(args.classes).forEach(function (id) {
            config.data_classes[id] = args.classes[id];
        });
    }
    // update categories if exists
    if ('categories' in args && $$.isCategorized()) {
        config.axis_x_categories = args.categories;
    }
    // update axes if exists
    if ('axes' in args) {
        Object.keys(args.axes).forEach(function (id) {
            config.data_axes[id] = args.axes[id];
        });
    }
    // update colors if exists
    if ('colors' in args) {
        Object.keys(args.colors).forEach(function (id) {
            config.data_colors[id] = args.colors[id];
        });
    }
    // use cache if exists
    if ('cacheIds' in args && $$.hasCaches(args.cacheIds)) {
        $$.load($$.getCaches(args.cacheIds), args.done);
        return;
    }
    // unload if needed
    if ('unload' in args) {
        // TODO: do not unload if target will load (included in url/rows/columns)
        $$.unload($$.mapToTargetIds(typeof args.unload === 'boolean' && args.unload ? null : args.unload), function () {
            $$.loadFromArgs(args);
        });
    } else {
        $$.loadFromArgs(args);
    }
};

c3_chart_fn.unload = function (args) {
    var $$ = this.internal;
    args = args || {};
    if (args instanceof Array) {
        args = { ids: args };
    } else if (typeof args === 'string') {
        args = { ids: [args] };
    }
    $$.unload($$.mapToTargetIds(args.ids), function () {
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
        if (args.done) {
            args.done();
        }
    });
};

c3_chart_fn.regions = function (regions) {
    var $$ = this.internal,
        config = $$.config;
    if (!regions) {
        return config.regions;
    }
    config.regions = regions;
    $$.redrawWithoutRescale();
    return config.regions;
};
c3_chart_fn.regions.add = function (regions) {
    var $$ = this.internal,
        config = $$.config;
    if (!regions) {
        return config.regions;
    }
    config.regions = config.regions.concat(regions);
    $$.redrawWithoutRescale();
    return config.regions;
};
c3_chart_fn.regions.remove = function (options) {
    var $$ = this.internal,
        config = $$.config,
        duration,
        classes,
        regions;

    options = options || {};
    duration = $$.getOption(options, "duration", config.transition_duration);
    classes = $$.getOption(options, "classes", [CLASS.region]);

    regions = $$.main.select('.' + CLASS.regions).selectAll(classes.map(function (c) {
        return '.' + c;
    }));
    (duration ? regions.transition().duration(duration) : regions).style('opacity', 0).remove();

    config.regions = config.regions.filter(function (region) {
        var found = false;
        if (!region['class']) {
            return true;
        }
        region['class'].split(' ').forEach(function (c) {
            if (classes.indexOf(c) >= 0) {
                found = true;
            }
        });
        return !found;
    });

    return config.regions;
};

c3_chart_fn.selected = function (targetId) {
    var $$ = this.internal,
        d3 = $$.d3;
    return d3.merge($$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(targetId)).selectAll('.' + CLASS.shape).filter(function () {
        return d3.select(this).classed(CLASS.SELECTED);
    }).map(function (d) {
        return d.map(function (d) {
            var data = d.__data__;return data.data ? data.data : data;
        });
    }));
};
c3_chart_fn.select = function (ids, indices, resetOther) {
    var $$ = this.internal,
        d3 = $$.d3,
        config = $$.config;
    if (!config.data_selection_enabled) {
        return;
    }
    $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
        var shape = d3.select(this),
            id = d.data ? d.data.id : d.id,
            toggle = $$.getToggle(this, d).bind($$),
            isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
            isTargetIndex = !indices || indices.indexOf(i) >= 0,
            isSelected = shape.classed(CLASS.SELECTED);
        // line/area selection not supported yet
        if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
            return;
        }
        if (isTargetId && isTargetIndex) {
            if (config.data_selection_isselectable(d) && !isSelected) {
                toggle(true, shape.classed(CLASS.SELECTED, true), d, i);
            }
        } else if (isDefined(resetOther) && resetOther) {
            if (isSelected) {
                toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
            }
        }
    });
};
c3_chart_fn.unselect = function (ids, indices) {
    var $$ = this.internal,
        d3 = $$.d3,
        config = $$.config;
    if (!config.data_selection_enabled) {
        return;
    }
    $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
        var shape = d3.select(this),
            id = d.data ? d.data.id : d.id,
            toggle = $$.getToggle(this, d).bind($$),
            isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
            isTargetIndex = !indices || indices.indexOf(i) >= 0,
            isSelected = shape.classed(CLASS.SELECTED);
        // line/area selection not supported yet
        if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
            return;
        }
        if (isTargetId && isTargetIndex) {
            if (config.data_selection_isselectable(d)) {
                if (isSelected) {
                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                }
            }
        }
    });
};

c3_chart_fn.show = function (targetIds, options) {
    var $$ = this.internal,
        targets;

    targetIds = $$.mapToTargetIds(targetIds);
    options = options || {};

    $$.removeHiddenTargetIds(targetIds);
    targets = $$.svg.selectAll($$.selectorTargets(targetIds));

    targets.transition().style('opacity', 1, 'important').call($$.endall, function () {
        targets.style('opacity', null).style('opacity', 1);
    });

    if (options.withLegend) {
        $$.showLegend(targetIds);
    }

    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
};

c3_chart_fn.hide = function (targetIds, options) {
    var $$ = this.internal,
        targets;

    targetIds = $$.mapToTargetIds(targetIds);
    options = options || {};

    $$.addHiddenTargetIds(targetIds);
    targets = $$.svg.selectAll($$.selectorTargets(targetIds));

    targets.transition().style('opacity', 0, 'important').call($$.endall, function () {
        targets.style('opacity', null).style('opacity', 0);
    });

    if (options.withLegend) {
        $$.hideLegend(targetIds);
    }

    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });
};

c3_chart_fn.toggle = function (targetIds, options) {
    var that = this,
        $$ = this.internal;
    $$.mapToTargetIds(targetIds).forEach(function (targetId) {
        $$.isTargetToShow(targetId) ? that.hide(targetId, options) : that.show(targetId, options);
    });
};

c3_chart_fn.tooltip = function () {};
c3_chart_fn.tooltip.show = function (args) {
    var $$ = this.internal,
        index,
        mouse;

    // determine mouse position on the chart
    if (args.mouse) {
        mouse = args.mouse;
    }

    // determine focus data
    if (args.data) {
        if ($$.isMultipleX()) {
            // if multiple xs, target point will be determined by mouse
            mouse = [$$.x(args.data.x), $$.getYScale(args.data.id)(args.data.value)];
            index = null;
        } else {
            // TODO: when tooltip_grouped = false
            index = isValue(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x);
        }
    } else if (typeof args.x !== 'undefined') {
        index = $$.getIndexByX(args.x);
    } else if (typeof args.index !== 'undefined') {
        index = args.index;
    }

    // emulate mouse events to show
    $$.dispatchEvent('mouseover', index, mouse);
    $$.dispatchEvent('mousemove', index, mouse);

    $$.config.tooltip_onshow.call($$, args.data);
};
c3_chart_fn.tooltip.hide = function () {
    // TODO: get target data by checking the state of focus
    this.internal.dispatchEvent('mouseout', 0);

    this.internal.config.tooltip_onhide.call(this);
};

c3_chart_fn.transform = function (type, targetIds) {
    var $$ = this.internal,
        options = ['pie', 'donut'].indexOf(type) >= 0 ? { withTransform: true } : null;
    $$.transformTo(targetIds, type, options);
};

c3_chart_internal_fn.transformTo = function (targetIds, type, optionsForRedraw) {
    var $$ = this,
        withTransitionForAxis = !$$.hasArcType(),
        options = optionsForRedraw || { withTransitionForAxis: withTransitionForAxis };
    options.withTransitionForTransform = false;
    $$.transiting = false;
    $$.setTargetType(targetIds, type);
    $$.updateTargets($$.data.targets); // this is needed when transforming to arc
    $$.updateAndRedraw(options);
};

c3_chart_fn.x = function (x) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetX($$.data.targets, x);
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    }
    return $$.data.xs;
};
c3_chart_fn.xs = function (xs) {
    var $$ = this.internal;
    if (arguments.length) {
        $$.updateTargetXs($$.data.targets, xs);
        $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true });
    }
    return $$.data.xs;
};

c3_chart_fn.zoom = function (domain) {
    var $$ = this.internal;
    if (domain) {
        if ($$.isTimeSeries()) {
            domain = domain.map(function (x) {
                return $$.parseDate(x);
            });
        }
        $$.brush.extent(domain);
        $$.redraw({ withUpdateXDomain: true, withY: $$.config.zoom_rescale });
        $$.config.zoom_onzoom.call(this, $$.x.orgDomain());
    }
    return $$.brush.extent();
};
c3_chart_fn.zoom.enable = function (enabled) {
    var $$ = this.internal;
    $$.config.zoom_enabled = enabled;
    $$.updateAndRedraw();
};
c3_chart_fn.unzoom = function () {
    var $$ = this.internal;
    $$.brush.clear().update();
    $$.redraw({ withUpdateXDomain: true });
};

c3_chart_fn.zoom.max = function (max) {
    var $$ = this.internal,
        config = $$.config,
        d3 = $$.d3;
    if (max === 0 || max) {
        config.zoom_x_max = d3.max([$$.orgXDomain[1], max]);
    } else {
        return config.zoom_x_max;
    }
};

c3_chart_fn.zoom.min = function (min) {
    var $$ = this.internal,
        config = $$.config,
        d3 = $$.d3;
    if (min === 0 || min) {
        config.zoom_x_min = d3.min([$$.orgXDomain[0], min]);
    } else {
        return config.zoom_x_min;
    }
};

c3_chart_fn.zoom.range = function (range) {
    if (arguments.length) {
        if (isDefined(range.max)) {
            this.domain.max(range.max);
        }
        if (isDefined(range.min)) {
            this.domain.min(range.min);
        }
    } else {
        return {
            max: this.domain.max(),
            min: this.domain.min()
        };
    }
};

c3_chart_internal_fn.initPie = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;
    $$.pie = d3.layout.pie().value(function (d) {
        return d.values.reduce(function (a, b) {
            return a + b.value;
        }, 0);
    });
    if (!config.data_order) {
        $$.pie.sort(null);
    }
};

c3_chart_internal_fn.updateRadius = function () {
    var $$ = this,
        config = $$.config,
        w = config.gauge_width || config.donut_width;
    $$.radiusExpanded = Math.min($$.arcWidth, $$.arcHeight) / 2;
    $$.radius = $$.radiusExpanded * 0.95;
    $$.innerRadiusRatio = w ? ($$.radius - w) / $$.radius : 0.6;
    $$.innerRadius = $$.hasType('donut') || $$.hasType('gauge') ? $$.radius * $$.innerRadiusRatio : 0;
};

c3_chart_internal_fn.updateArc = function () {
    var $$ = this;
    $$.svgArc = $$.getSvgArc();
    $$.svgArcExpanded = $$.getSvgArcExpanded();
    $$.svgArcExpandedSub = $$.getSvgArcExpanded(0.98);
};

c3_chart_internal_fn.updateAngle = function (d) {
    var $$ = this,
        config = $$.config,
        found = false,
        index = 0,
        gMin,
        gMax,
        gTic,
        gValue;

    if (!config) {
        return null;
    }

    $$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
        if (!found && t.data.id === d.data.id) {
            found = true;
            d = t;
            d.index = index;
        }
        index++;
    });
    if (isNaN(d.startAngle)) {
        d.startAngle = 0;
    }
    if (isNaN(d.endAngle)) {
        d.endAngle = d.startAngle;
    }
    if ($$.isGaugeType(d.data)) {
        gMin = config.gauge_min;
        gMax = config.gauge_max;
        gTic = Math.PI * (config.gauge_fullCircle ? 2 : 1) / (gMax - gMin);
        gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin;
        d.startAngle = config.gauge_startingAngle;
        d.endAngle = d.startAngle + gTic * gValue;
    }
    return found ? d : null;
};

c3_chart_internal_fn.getSvgArc = function () {
    var $$ = this,
        arc = $$.d3.svg.arc().outerRadius($$.radius).innerRadius($$.innerRadius),
        newArc = function newArc(d, withoutUpdate) {
        var updated;
        if (withoutUpdate) {
            return arc(d);
        } // for interpolate
        updated = $$.updateAngle(d);
        return updated ? arc(updated) : "M 0 0";
    };
    // TODO: extends all function
    newArc.centroid = arc.centroid;
    return newArc;
};

c3_chart_internal_fn.getSvgArcExpanded = function (rate) {
    var $$ = this,
        arc = $$.d3.svg.arc().outerRadius($$.radiusExpanded * (rate ? rate : 1)).innerRadius($$.innerRadius);
    return function (d) {
        var updated = $$.updateAngle(d);
        return updated ? arc(updated) : "M 0 0";
    };
};

c3_chart_internal_fn.getArc = function (d, withoutUpdate, force) {
    return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
};

c3_chart_internal_fn.transformForArcLabel = function (d) {
    var $$ = this,
        config = $$.config,
        updated = $$.updateAngle(d),
        c,
        x,
        y,
        h,
        ratio,
        translate = "";
    if (updated && !$$.hasType('gauge')) {
        c = this.svgArc.centroid(updated);
        x = isNaN(c[0]) ? 0 : c[0];
        y = isNaN(c[1]) ? 0 : c[1];
        h = Math.sqrt(x * x + y * y);
        if ($$.hasType('donut') && config.donut_label_ratio) {
            ratio = isFunction(config.donut_label_ratio) ? config.donut_label_ratio(d, $$.radius, h) : config.donut_label_ratio;
        } else if ($$.hasType('pie') && config.pie_label_ratio) {
            ratio = isFunction(config.pie_label_ratio) ? config.pie_label_ratio(d, $$.radius, h) : config.pie_label_ratio;
        } else {
            ratio = $$.radius && h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0;
        }
        translate = "translate(" + x * ratio + ',' + y * ratio + ")";
    }
    return translate;
};

c3_chart_internal_fn.getArcRatio = function (d) {
    var $$ = this,
        config = $$.config,
        whole = Math.PI * ($$.hasType('gauge') && !config.gauge_fullCircle ? 1 : 2);
    return d ? (d.endAngle - d.startAngle) / whole : null;
};

c3_chart_internal_fn.convertToArcData = function (d) {
    return this.addName({
        id: d.data.id,
        value: d.value,
        ratio: this.getArcRatio(d),
        index: d.index
    });
};

c3_chart_internal_fn.textForArcLabel = function (d) {
    var $$ = this,
        updated,
        value,
        ratio,
        id,
        format;
    if (!$$.shouldShowArcLabel()) {
        return "";
    }
    updated = $$.updateAngle(d);
    value = updated ? updated.value : null;
    ratio = $$.getArcRatio(updated);
    id = d.data.id;
    if (!$$.hasType('gauge') && !$$.meetsArcLabelThreshold(ratio)) {
        return "";
    }
    format = $$.getArcLabelFormat();
    return format ? format(value, ratio, id) : $$.defaultArcValueFormat(value, ratio);
};

c3_chart_internal_fn.textForGaugeMinMax = function (value, isMax) {
    var $$ = this,
        format = $$.getGaugeLabelExtents();

    return format ? format(value, isMax) : value;
};

c3_chart_internal_fn.expandArc = function (targetIds) {
    var $$ = this,
        interval;

    // MEMO: avoid to cancel transition
    if ($$.transiting) {
        interval = window.setInterval(function () {
            if (!$$.transiting) {
                window.clearInterval(interval);
                if ($$.legend.selectAll('.c3-legend-item-focused').size() > 0) {
                    $$.expandArc(targetIds);
                }
            }
        }, 10);
        return;
    }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).each(function (d) {
        if (!$$.shouldExpand(d.data.id)) {
            return;
        }
        $$.d3.select(this).selectAll('path').transition().duration($$.expandDuration(d.data.id)).attr("d", $$.svgArcExpanded).transition().duration($$.expandDuration(d.data.id) * 2).attr("d", $$.svgArcExpandedSub).each(function (d) {
            if ($$.isDonutType(d.data)) {
                // callback here
            }
        });
    });
};

c3_chart_internal_fn.unexpandArc = function (targetIds) {
    var $$ = this;

    if ($$.transiting) {
        return;
    }

    targetIds = $$.mapToTargetIds(targetIds);

    $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).selectAll('path').transition().duration(function (d) {
        return $$.expandDuration(d.data.id);
    }).attr("d", $$.svgArc);
    $$.svg.selectAll('.' + CLASS.arc);
};

c3_chart_internal_fn.expandDuration = function (id) {
    var $$ = this,
        config = $$.config;

    if ($$.isDonutType(id)) {
        return config.donut_expand_duration;
    } else if ($$.isGaugeType(id)) {
        return config.gauge_expand_duration;
    } else if ($$.isPieType(id)) {
        return config.pie_expand_duration;
    } else {
        return 50;
    }
};

c3_chart_internal_fn.shouldExpand = function (id) {
    var $$ = this,
        config = $$.config;
    return $$.isDonutType(id) && config.donut_expand || $$.isGaugeType(id) && config.gauge_expand || $$.isPieType(id) && config.pie_expand;
};

c3_chart_internal_fn.shouldShowArcLabel = function () {
    var $$ = this,
        config = $$.config,
        shouldShow = true;
    if ($$.hasType('donut')) {
        shouldShow = config.donut_label_show;
    } else if ($$.hasType('pie')) {
        shouldShow = config.pie_label_show;
    }
    // when gauge, always true
    return shouldShow;
};

c3_chart_internal_fn.meetsArcLabelThreshold = function (ratio) {
    var $$ = this,
        config = $$.config,
        threshold = $$.hasType('donut') ? config.donut_label_threshold : config.pie_label_threshold;
    return ratio >= threshold;
};

c3_chart_internal_fn.getArcLabelFormat = function () {
    var $$ = this,
        config = $$.config,
        format = config.pie_label_format;
    if ($$.hasType('gauge')) {
        format = config.gauge_label_format;
    } else if ($$.hasType('donut')) {
        format = config.donut_label_format;
    }
    return format;
};

c3_chart_internal_fn.getGaugeLabelExtents = function () {
    var $$ = this,
        config = $$.config;
    return config.gauge_label_extents;
};

c3_chart_internal_fn.getArcTitle = function () {
    var $$ = this;
    return $$.hasType('donut') ? $$.config.donut_title : "";
};

c3_chart_internal_fn.updateTargetsForArc = function (targets) {
    var $$ = this,
        main = $$.main,
        mainPieUpdate,
        mainPieEnter,
        classChartArc = $$.classChartArc.bind($$),
        classArcs = $$.classArcs.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainPieUpdate = main.select('.' + CLASS.chartArcs).selectAll('.' + CLASS.chartArc).data($$.pie(targets)).attr("class", function (d) {
        return classChartArc(d) + classFocus(d.data);
    });
    mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc);
    mainPieEnter.append('g').attr('class', classArcs);
    mainPieEnter.append("text").attr("dy", $$.hasType('gauge') ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none");
    // MEMO: can not keep same color..., but not bad to update color in redraw
    //mainPieUpdate.exit().remove();
};

c3_chart_internal_fn.initArc = function () {
    var $$ = this;
    $$.arcs = $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
    $$.arcs.append('text').attr('class', CLASS.chartArcsTitle).style("text-anchor", "middle").text($$.getArcTitle());
};

c3_chart_internal_fn.redrawArc = function (duration, durationForExit, withTransform) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        main = $$.main,
        mainArc;
    mainArc = main.selectAll('.' + CLASS.arcs).selectAll('.' + CLASS.arc).data($$.arcData.bind($$));
    mainArc.enter().append('path').attr("class", $$.classArc.bind($$)).style("fill", function (d) {
        return $$.color(d.data);
    }).style("cursor", function (d) {
        return config.interaction_enabled && config.data_selection_isselectable(d) ? "pointer" : null;
    }).each(function (d) {
        if ($$.isGaugeType(d.data)) {
            d.startAngle = d.endAngle = config.gauge_startingAngle;
        }
        this._current = d;
    });
    mainArc.attr("transform", function (d) {
        return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
    }).on('mouseover', config.interaction_enabled ? function (d) {
        var updated, arcData;
        if ($$.transiting) {
            // skip while transiting
            return;
        }
        updated = $$.updateAngle(d);
        if (updated) {
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.expandArc(updated.data.id);
            $$.api.focus(updated.data.id);
            $$.toggleFocusLegend(updated.data.id, true);
            $$.config.data_onmouseover(arcData, this);
        }
    } : null).on('mousemove', config.interaction_enabled ? function (d) {
        var updated = $$.updateAngle(d),
            arcData,
            selectedData;
        if (updated) {
            arcData = $$.convertToArcData(updated), selectedData = [arcData];
            $$.showTooltip(selectedData, this);
        }
    } : null).on('mouseout', config.interaction_enabled ? function (d) {
        var updated, arcData;
        if ($$.transiting) {
            // skip while transiting
            return;
        }
        updated = $$.updateAngle(d);
        if (updated) {
            arcData = $$.convertToArcData(updated);
            // transitions
            $$.unexpandArc(updated.data.id);
            $$.api.revert();
            $$.revertLegend();
            $$.hideTooltip();
            $$.config.data_onmouseout(arcData, this);
        }
    } : null).on('click', config.interaction_enabled ? function (d, i) {
        var updated = $$.updateAngle(d),
            arcData;
        if (updated) {
            arcData = $$.convertToArcData(updated);
            if ($$.toggleShape) {
                $$.toggleShape(this, arcData, i);
            }
            $$.config.data_onclick.call($$.api, arcData, this);
        }
    } : null).each(function () {
        $$.transiting = true;
    }).transition().duration(duration).attrTween("d", function (d) {
        var updated = $$.updateAngle(d),
            interpolate;
        if (!updated) {
            return function () {
                return "M 0 0";
            };
        }
        //                if (this._current === d) {
        //                    this._current = {
        //                        startAngle: Math.PI*2,
        //                        endAngle: Math.PI*2,
        //                    };
        //                }
        if (isNaN(this._current.startAngle)) {
            this._current.startAngle = 0;
        }
        if (isNaN(this._current.endAngle)) {
            this._current.endAngle = this._current.startAngle;
        }
        interpolate = d3.interpolate(this._current, updated);
        this._current = interpolate(0);
        return function (t) {
            var interpolated = interpolate(t);
            interpolated.data = d.data; // data.id will be updated by interporator
            return $$.getArc(interpolated, true);
        };
    }).attr("transform", withTransform ? "scale(1)" : "").style("fill", function (d) {
        return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
    } // Where gauge reading color would receive customization.
    ).call($$.endall, function () {
        $$.transiting = false;
    });
    mainArc.exit().transition().duration(durationForExit).style('opacity', 0).remove();
    main.selectAll('.' + CLASS.chartArc).select('text').style("opacity", 0).attr('class', function (d) {
        return $$.isGaugeType(d.data) ? CLASS.gaugeValue : '';
    }).text($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style('font-size', function (d) {
        return $$.isGaugeType(d.data) ? Math.round($$.radius / 5) + 'px' : '';
    }).transition().duration(duration).style("opacity", function (d) {
        return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? 1 : 0;
    });
    main.select('.' + CLASS.chartArcsTitle).style("opacity", $$.hasType('donut') || $$.hasType('gauge') ? 1 : 0);

    if ($$.hasType('gauge')) {
        $$.arcs.select('.' + CLASS.chartArcsBackground).attr("d", function () {
            var d = {
                data: [{ value: config.gauge_max }],
                startAngle: config.gauge_startingAngle,
                endAngle: -1 * config.gauge_startingAngle
            };
            return $$.getArc(d, true, true);
        });
        $$.arcs.select('.' + CLASS.chartArcsGaugeUnit).attr("dy", ".75em").text(config.gauge_label_show ? config.gauge_units : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMin).attr("dx", -1 * ($$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_min, false) : '');
        $$.arcs.select('.' + CLASS.chartArcsGaugeMax).attr("dx", $$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_max, true) : '');
    }
};
c3_chart_internal_fn.initGauge = function () {
    var arcs = this.arcs;
    if (this.hasType('gauge')) {
        arcs.append('path').attr("class", CLASS.chartArcsBackground);
        arcs.append("text").attr("class", CLASS.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none");
        arcs.append("text").attr("class", CLASS.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none");
        arcs.append("text").attr("class", CLASS.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none");
    }
};
c3_chart_internal_fn.getGaugeLabelHeight = function () {
    return this.config.gauge_label_show ? 20 : 0;
};

c3_chart_internal_fn.hasCaches = function (ids) {
    for (var i = 0; i < ids.length; i++) {
        if (!(ids[i] in this.cache)) {
            return false;
        }
    }
    return true;
};
c3_chart_internal_fn.addCache = function (id, target) {
    this.cache[id] = this.cloneTarget(target);
};
c3_chart_internal_fn.getCaches = function (ids) {
    var targets = [],
        i;
    for (i = 0; i < ids.length; i++) {
        if (ids[i] in this.cache) {
            targets.push(this.cloneTarget(this.cache[ids[i]]));
        }
    }
    return targets;
};

c3_chart_internal_fn.categoryName = function (i) {
    var config = this.config;
    return i < config.axis_x_categories.length ? config.axis_x_categories[i] : i;
};

c3_chart_internal_fn.generateClass = function (prefix, targetId) {
    return " " + prefix + " " + prefix + this.getTargetSelectorSuffix(targetId);
};
c3_chart_internal_fn.classText = function (d) {
    return this.generateClass(CLASS.text, d.index);
};
c3_chart_internal_fn.classTexts = function (d) {
    return this.generateClass(CLASS.texts, d.id);
};
c3_chart_internal_fn.classShape = function (d) {
    return this.generateClass(CLASS.shape, d.index);
};
c3_chart_internal_fn.classShapes = function (d) {
    return this.generateClass(CLASS.shapes, d.id);
};
c3_chart_internal_fn.classLine = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.line, d.id);
};
c3_chart_internal_fn.classLines = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.lines, d.id);
};
c3_chart_internal_fn.classCircle = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.circle, d.index);
};
c3_chart_internal_fn.classCircles = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.circles, d.id);
};
c3_chart_internal_fn.classBar = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.bar, d.index);
};
c3_chart_internal_fn.classBars = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.bars, d.id);
};
c3_chart_internal_fn.classArc = function (d) {
    return this.classShape(d.data) + this.generateClass(CLASS.arc, d.data.id);
};
c3_chart_internal_fn.classArcs = function (d) {
    return this.classShapes(d.data) + this.generateClass(CLASS.arcs, d.data.id);
};
c3_chart_internal_fn.classArea = function (d) {
    return this.classShape(d) + this.generateClass(CLASS.area, d.id);
};
c3_chart_internal_fn.classAreas = function (d) {
    return this.classShapes(d) + this.generateClass(CLASS.areas, d.id);
};
c3_chart_internal_fn.classRegion = function (d, i) {
    return this.generateClass(CLASS.region, i) + ' ' + ('class' in d ? d['class'] : '');
};
c3_chart_internal_fn.classEvent = function (d) {
    return this.generateClass(CLASS.eventRect, d.index);
};
c3_chart_internal_fn.classTarget = function (id) {
    var $$ = this;
    var additionalClassSuffix = $$.config.data_classes[id],
        additionalClass = '';
    if (additionalClassSuffix) {
        additionalClass = ' ' + CLASS.target + '-' + additionalClassSuffix;
    }
    return $$.generateClass(CLASS.target, id) + additionalClass;
};
c3_chart_internal_fn.classFocus = function (d) {
    return this.classFocused(d) + this.classDefocused(d);
};
c3_chart_internal_fn.classFocused = function (d) {
    return ' ' + (this.focusedTargetIds.indexOf(d.id) >= 0 ? CLASS.focused : '');
};
c3_chart_internal_fn.classDefocused = function (d) {
    return ' ' + (this.defocusedTargetIds.indexOf(d.id) >= 0 ? CLASS.defocused : '');
};
c3_chart_internal_fn.classChartText = function (d) {
    return CLASS.chartText + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartLine = function (d) {
    return CLASS.chartLine + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartBar = function (d) {
    return CLASS.chartBar + this.classTarget(d.id);
};
c3_chart_internal_fn.classChartArc = function (d) {
    return CLASS.chartArc + this.classTarget(d.data.id);
};
c3_chart_internal_fn.getTargetSelectorSuffix = function (targetId) {
    return targetId || targetId === 0 ? ('-' + targetId).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, '-') : '';
};
c3_chart_internal_fn.selectorTarget = function (id, prefix) {
    return (prefix || '') + '.' + CLASS.target + this.getTargetSelectorSuffix(id);
};
c3_chart_internal_fn.selectorTargets = function (ids, prefix) {
    var $$ = this;
    ids = ids || [];
    return ids.length ? ids.map(function (id) {
        return $$.selectorTarget(id, prefix);
    }) : null;
};
c3_chart_internal_fn.selectorLegend = function (id) {
    return '.' + CLASS.legendItem + this.getTargetSelectorSuffix(id);
};
c3_chart_internal_fn.selectorLegends = function (ids) {
    var $$ = this;
    return ids && ids.length ? ids.map(function (id) {
        return $$.selectorLegend(id);
    }) : null;
};

c3_chart_internal_fn.getClipPath = function (id) {
    var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
    return "url(" + (isIE9 ? "" : document.URL.split('#')[0]) + "#" + id + ")";
};
c3_chart_internal_fn.appendClip = function (parent, id) {
    return parent.append("clipPath").attr("id", id).append("rect");
};
c3_chart_internal_fn.getAxisClipX = function (forHorizontal) {
    // axis line width + padding for left
    var left = Math.max(30, this.margin.left);
    return forHorizontal ? -(1 + left) : -(left - 1);
};
c3_chart_internal_fn.getAxisClipY = function (forHorizontal) {
    return forHorizontal ? -20 : -this.margin.top;
};
c3_chart_internal_fn.getXAxisClipX = function () {
    var $$ = this;
    return $$.getAxisClipX(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getXAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipX = function () {
    var $$ = this;
    return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipY = function () {
    var $$ = this;
    return $$.getAxisClipY($$.config.axis_rotated);
};
c3_chart_internal_fn.getAxisClipWidth = function (forHorizontal) {
    var $$ = this,
        left = Math.max(30, $$.margin.left),
        right = Math.max(30, $$.margin.right);
    // width + axis line width + padding for left/right
    return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
};
c3_chart_internal_fn.getAxisClipHeight = function (forHorizontal) {
    // less than 20 is not enough to show the axis label 'outer' without legend
    return (forHorizontal ? this.margin.bottom : this.margin.top + this.height) + 20;
};
c3_chart_internal_fn.getXAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getXAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight(!$$.config.axis_rotated);
};
c3_chart_internal_fn.getYAxisClipWidth = function () {
    var $$ = this;
    return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
};
c3_chart_internal_fn.getYAxisClipHeight = function () {
    var $$ = this;
    return $$.getAxisClipHeight($$.config.axis_rotated);
};

c3_chart_internal_fn.generateColor = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        colors = config.data_colors,
        pattern = notEmpty(config.color_pattern) ? config.color_pattern : d3.scale.category10().range(),
        callback = config.data_color,
        ids = [];

    return function (d) {
        var id = d.id || d.data && d.data.id || d,
            color;

        // if callback function is provided
        if (colors[id] instanceof Function) {
            color = colors[id](d);
        }
        // if specified, choose that color
        else if (colors[id]) {
                color = colors[id];
            }
            // if not specified, choose from pattern
            else {
                    if (ids.indexOf(id) < 0) {
                        ids.push(id);
                    }
                    color = pattern[ids.indexOf(id) % pattern.length];
                    colors[id] = color;
                }
        return callback instanceof Function ? callback(color, d) : color;
    };
};
c3_chart_internal_fn.generateLevelColor = function () {
    var $$ = this,
        config = $$.config,
        colors = config.color_pattern,
        threshold = config.color_threshold,
        asValue = threshold.unit === 'value',
        values = threshold.values && threshold.values.length ? threshold.values : [],
        max = threshold.max || 100;
    return notEmpty(config.color_threshold) ? function (value) {
        var i,
            v,
            color = colors[colors.length - 1];
        for (i = 0; i < values.length; i++) {
            v = asValue ? value : value * 100 / max;
            if (v < values[i]) {
                color = colors[i];
                break;
            }
        }
        return color;
    } : null;
};

c3_chart_internal_fn.getDefaultConfig = function () {
    var config = {
        bindto: '#chart',
        svg_classname: undefined,
        size_width: undefined,
        size_height: undefined,
        padding_left: undefined,
        padding_right: undefined,
        padding_top: undefined,
        padding_bottom: undefined,
        resize_auto: true,
        zoom_enabled: false,
        zoom_extent: undefined,
        zoom_privileged: false,
        zoom_rescale: false,
        zoom_onzoom: function zoom_onzoom() {},
        zoom_onzoomstart: function zoom_onzoomstart() {},
        zoom_onzoomend: function zoom_onzoomend() {},
        zoom_x_min: undefined,
        zoom_x_max: undefined,
        interaction_brighten: true,
        interaction_enabled: true,
        onmouseover: function onmouseover() {},
        onmouseout: function onmouseout() {},
        onresize: function onresize() {},
        onresized: function onresized() {},
        oninit: function oninit() {},
        onrendered: function onrendered() {},
        transition_duration: 350,
        data_x: undefined,
        data_xs: {},
        data_xFormat: '%Y-%m-%d',
        data_xLocaltime: true,
        data_xSort: true,
        data_idConverter: function data_idConverter(id) {
            return id;
        },
        data_names: {},
        data_classes: {},
        data_groups: [],
        data_axes: {},
        data_type: undefined,
        data_types: {},
        data_labels: {},
        data_order: 'desc',
        data_regions: {},
        data_color: undefined,
        data_colors: {},
        data_hide: false,
        data_filter: undefined,
        data_selection_enabled: false,
        data_selection_grouped: false,
        data_selection_isselectable: function data_selection_isselectable() {
            return true;
        },
        data_selection_multiple: true,
        data_selection_draggable: false,
        data_onclick: function data_onclick() {},
        data_onmouseover: function data_onmouseover() {},
        data_onmouseout: function data_onmouseout() {},
        data_onselected: function data_onselected() {},
        data_onunselected: function data_onunselected() {},
        data_url: undefined,
        data_headers: undefined,
        data_json: undefined,
        data_rows: undefined,
        data_columns: undefined,
        data_mimeType: undefined,
        data_keys: undefined,
        // configuration for no plot-able data supplied.
        data_empty_label_text: "",
        // subchart
        subchart_show: false,
        subchart_size_height: 60,
        subchart_axis_x_show: true,
        subchart_onbrush: function subchart_onbrush() {},
        // color
        color_pattern: [],
        color_threshold: {},
        // legend
        legend_show: true,
        legend_hide: false,
        legend_position: 'bottom',
        legend_inset_anchor: 'top-left',
        legend_inset_x: 10,
        legend_inset_y: 0,
        legend_inset_step: undefined,
        legend_item_onclick: undefined,
        legend_item_onmouseover: undefined,
        legend_item_onmouseout: undefined,
        legend_equally: false,
        legend_padding: 0,
        legend_item_tile_width: 10,
        legend_item_tile_height: 10,
        // axis
        axis_rotated: false,
        axis_x_show: true,
        axis_x_type: 'indexed',
        axis_x_localtime: true,
        axis_x_categories: [],
        axis_x_tick_centered: false,
        axis_x_tick_format: undefined,
        axis_x_tick_culling: {},
        axis_x_tick_culling_max: 10,
        axis_x_tick_count: undefined,
        axis_x_tick_fit: true,
        axis_x_tick_values: null,
        axis_x_tick_rotate: 0,
        axis_x_tick_outer: true,
        axis_x_tick_multiline: true,
        axis_x_tick_width: null,
        axis_x_max: undefined,
        axis_x_min: undefined,
        axis_x_padding: {},
        axis_x_height: undefined,
        axis_x_extent: undefined,
        axis_x_label: {},
        axis_y_show: true,
        axis_y_type: undefined,
        axis_y_max: undefined,
        axis_y_min: undefined,
        axis_y_inverted: false,
        axis_y_center: undefined,
        axis_y_inner: undefined,
        axis_y_label: {},
        axis_y_tick_format: undefined,
        axis_y_tick_outer: true,
        axis_y_tick_values: null,
        axis_y_tick_rotate: 0,
        axis_y_tick_count: undefined,
        axis_y_tick_time_value: undefined,
        axis_y_tick_time_interval: undefined,
        axis_y_padding: {},
        axis_y_default: undefined,
        axis_y2_show: false,
        axis_y2_max: undefined,
        axis_y2_min: undefined,
        axis_y2_inverted: false,
        axis_y2_center: undefined,
        axis_y2_inner: undefined,
        axis_y2_label: {},
        axis_y2_tick_format: undefined,
        axis_y2_tick_outer: true,
        axis_y2_tick_values: null,
        axis_y2_tick_count: undefined,
        axis_y2_padding: {},
        axis_y2_default: undefined,
        // grid
        grid_x_show: false,
        grid_x_type: 'tick',
        grid_x_lines: [],
        grid_y_show: false,
        // not used
        // grid_y_type: 'tick',
        grid_y_lines: [],
        grid_y_ticks: 10,
        grid_focus_show: true,
        grid_lines_front: true,
        // point - point of each data
        point_show: true,
        point_r: 2.5,
        point_sensitivity: 10,
        point_focus_expand_enabled: true,
        point_focus_expand_r: undefined,
        point_select_r: undefined,
        // line
        line_connectNull: false,
        line_step_type: 'step',
        // bar
        bar_width: undefined,
        bar_width_ratio: 0.6,
        bar_width_max: undefined,
        bar_zerobased: true,
        // area
        area_zerobased: true,
        area_above: false,
        // pie
        pie_label_show: true,
        pie_label_format: undefined,
        pie_label_threshold: 0.05,
        pie_label_ratio: undefined,
        pie_expand: {},
        pie_expand_duration: 50,
        // gauge
        gauge_fullCircle: false,
        gauge_label_show: true,
        gauge_label_format: undefined,
        gauge_min: 0,
        gauge_max: 100,
        gauge_startingAngle: -1 * Math.PI / 2,
        gauge_label_extents: undefined,
        gauge_units: undefined,
        gauge_width: undefined,
        gauge_expand: {},
        gauge_expand_duration: 50,
        // donut
        donut_label_show: true,
        donut_label_format: undefined,
        donut_label_threshold: 0.05,
        donut_label_ratio: undefined,
        donut_width: undefined,
        donut_title: "",
        donut_expand: {},
        donut_expand_duration: 50,
        // spline
        spline_interpolation_type: 'cardinal',
        // region - region to change style
        regions: [],
        // tooltip - show when mouseover on each data
        tooltip_show: true,
        tooltip_grouped: true,
        tooltip_order: undefined,
        tooltip_format_title: undefined,
        tooltip_format_name: undefined,
        tooltip_format_value: undefined,
        tooltip_position: undefined,
        tooltip_contents: function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
            return this.getTooltipContent ? this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) : '';
        },
        tooltip_init_show: false,
        tooltip_init_x: 0,
        tooltip_init_position: { top: '0px', left: '50px' },
        tooltip_onshow: function tooltip_onshow() {},
        tooltip_onhide: function tooltip_onhide() {},
        // title
        title_text: undefined,
        title_padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        title_position: 'top-center'
    };

    Object.keys(this.additionalConfig).forEach(function (key) {
        config[key] = this.additionalConfig[key];
    }, this);

    return config;
};
c3_chart_internal_fn.additionalConfig = {};

c3_chart_internal_fn.loadConfig = function (config) {
    var this_config = this.config,
        target,
        keys,
        read;
    function find() {
        var key = keys.shift();
        //        console.log("key =>", key, ", target =>", target);
        if (key && target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && key in target) {
            target = target[key];
            return find();
        } else if (!key) {
            return target;
        } else {
            return undefined;
        }
    }
    Object.keys(this_config).forEach(function (key) {
        target = config;
        keys = key.split('_');
        read = find();
        //        console.log("CONFIG : ", key, read);
        if (isDefined(read)) {
            this_config[key] = read;
        }
    });
};

c3_chart_internal_fn.convertUrlToData = function (url, mimeType, headers, keys, done) {
    var $$ = this,
        type = mimeType ? mimeType : 'csv';
    var req = $$.d3.xhr(url);
    if (headers) {
        Object.keys(headers).forEach(function (header) {
            req.header(header, headers[header]);
        });
    }
    req.get(function (error, data) {
        var d;
        var dataResponse = data.response || data.responseText; // Fixes IE9 XHR issue; see #1345
        if (!data) {
            throw new Error(error.responseURL + ' ' + error.status + ' (' + error.statusText + ')');
        }
        if (type === 'json') {
            d = $$.convertJsonToData(JSON.parse(dataResponse), keys);
        } else if (type === 'tsv') {
            d = $$.convertTsvToData(dataResponse);
        } else {
            d = $$.convertCsvToData(dataResponse);
        }
        done.call($$, d);
    });
};
c3_chart_internal_fn.convertXsvToData = function (xsv, parser) {
    var rows = parser.parseRows(xsv),
        d;
    if (rows.length === 1) {
        d = [{}];
        rows[0].forEach(function (id) {
            d[0][id] = null;
        });
    } else {
        d = parser.parse(xsv);
    }
    return d;
};
c3_chart_internal_fn.convertCsvToData = function (csv) {
    return this.convertXsvToData(csv, this.d3.csv);
};
c3_chart_internal_fn.convertTsvToData = function (tsv) {
    return this.convertXsvToData(tsv, this.d3.tsv);
};
c3_chart_internal_fn.convertJsonToData = function (json, keys) {
    var $$ = this,
        new_rows = [],
        targetKeys,
        data;
    if (keys) {
        // when keys specified, json would be an array that includes objects
        if (keys.x) {
            targetKeys = keys.value.concat(keys.x);
            $$.config.data_x = keys.x;
        } else {
            targetKeys = keys.value;
        }
        new_rows.push(targetKeys);
        json.forEach(function (o) {
            var new_row = [];
            targetKeys.forEach(function (key) {
                // convert undefined to null because undefined data will be removed in convertDataToTargets()
                var v = $$.findValueInJson(o, key);
                if (isUndefined(v)) {
                    v = null;
                }
                new_row.push(v);
            });
            new_rows.push(new_row);
        });
        data = $$.convertRowsToData(new_rows);
    } else {
        Object.keys(json).forEach(function (key) {
            new_rows.push([key].concat(json[key]));
        });
        data = $$.convertColumnsToData(new_rows);
    }
    return data;
};
c3_chart_internal_fn.findValueInJson = function (object, path) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties (replace [] with .)
    path = path.replace(/^\./, ''); // strip a leading dot
    var pathArray = path.split('.');
    for (var i = 0; i < pathArray.length; ++i) {
        var k = pathArray[i];
        if (k in object) {
            object = object[k];
        } else {
            return;
        }
    }
    return object;
};

/**
 * Converts the rows to normalized data.
 * @param {any[][]} rows The row data
 * @return {Object[]}
 */
c3_chart_internal_fn.convertRowsToData = function (rows) {
    var newRows = [];
    var keys = rows[0];

    for (var i = 1; i < rows.length; i++) {
        var newRow = {};
        for (var j = 0; j < rows[i].length; j++) {
            if (isUndefined(rows[i][j])) {
                throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
            }
            newRow[keys[j]] = rows[i][j];
        }
        newRows.push(newRow);
    }
    return newRows;
};

/**
 * Converts the columns to normalized data.
 * @param {any[][]} columns The column data
 * @return {Object[]}
 */
c3_chart_internal_fn.convertColumnsToData = function (columns) {
    var newRows = [];

    for (var i = 0; i < columns.length; i++) {
        var key = columns[i][0];
        for (var j = 1; j < columns[i].length; j++) {
            if (isUndefined(newRows[j - 1])) {
                newRows[j - 1] = {};
            }
            if (isUndefined(columns[i][j])) {
                throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
            }
            newRows[j - 1][key] = columns[i][j];
        }
    }

    return newRows;
};

c3_chart_internal_fn.convertDataToTargets = function (data, appendXs) {
    var $$ = this,
        config = $$.config,
        ids = $$.d3.keys(data[0]).filter($$.isNotX, $$),
        xs = $$.d3.keys(data[0]).filter($$.isX, $$),
        targets;

    // save x for update data by load when custom x and c3.x API
    ids.forEach(function (id) {
        var xKey = $$.getXKey(id);

        if ($$.isCustomX() || $$.isTimeSeries()) {
            // if included in input data
            if (xs.indexOf(xKey) >= 0) {
                $$.data.xs[id] = (appendXs && $$.data.xs[id] ? $$.data.xs[id] : []).concat(data.map(function (d) {
                    return d[xKey];
                }).filter(isValue).map(function (rawX, i) {
                    return $$.generateTargetX(rawX, id, i);
                }));
            }
            // if not included in input data, find from preloaded data of other id's x
            else if (config.data_x) {
                    $$.data.xs[id] = $$.getOtherTargetXs();
                }
                // if not included in input data, find from preloaded data
                else if (notEmpty(config.data_xs)) {
                        $$.data.xs[id] = $$.getXValuesOfXKey(xKey, $$.data.targets);
                    }
            // MEMO: if no x included, use same x of current will be used
        } else {
            $$.data.xs[id] = data.map(function (d, i) {
                return i;
            });
        }
    });

    // check x is defined
    ids.forEach(function (id) {
        if (!$$.data.xs[id]) {
            throw new Error('x is not defined for id = "' + id + '".');
        }
    });

    // convert to target
    targets = ids.map(function (id, index) {
        var convertedId = config.data_idConverter(id);
        return {
            id: convertedId,
            id_org: id,
            values: data.map(function (d, i) {
                var xKey = $$.getXKey(id),
                    rawX = d[xKey],
                    value = d[id] !== null && !isNaN(d[id]) ? +d[id] : null,
                    x;
                // use x as categories if custom x and categorized
                if ($$.isCustomX() && $$.isCategorized() && !isUndefined(rawX)) {
                    if (index === 0 && i === 0) {
                        config.axis_x_categories = [];
                    }
                    x = config.axis_x_categories.indexOf(rawX);
                    if (x === -1) {
                        x = config.axis_x_categories.length;
                        config.axis_x_categories.push(rawX);
                    }
                } else {
                    x = $$.generateTargetX(rawX, id, i);
                }
                // mark as x = undefined if value is undefined and filter to remove after mapped
                if (isUndefined(d[id]) || $$.data.xs[id].length <= i) {
                    x = undefined;
                }
                return { x: x, value: value, id: convertedId };
            }).filter(function (v) {
                return isDefined(v.x);
            })
        };
    });

    // finish targets
    targets.forEach(function (t) {
        var i;
        // sort values by its x
        if (config.data_xSort) {
            t.values = t.values.sort(function (v1, v2) {
                var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
                    x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
                return x1 - x2;
            });
        }
        // indexing each value
        i = 0;
        t.values.forEach(function (v) {
            v.index = i++;
        });
        // this needs to be sorted because its index and value.index is identical
        $$.data.xs[t.id].sort(function (v1, v2) {
            return v1 - v2;
        });
    });

    // cache information about values
    $$.hasNegativeValue = $$.hasNegativeValueInTargets(targets);
    $$.hasPositiveValue = $$.hasPositiveValueInTargets(targets);

    // set target types
    if (config.data_type) {
        $$.setTargetType($$.mapToIds(targets).filter(function (id) {
            return !(id in config.data_types);
        }), config.data_type);
    }

    // cache as original id keyed
    targets.forEach(function (d) {
        $$.addCache(d.id_org, d);
    });

    return targets;
};

c3_chart_internal_fn.isX = function (key) {
    var $$ = this,
        config = $$.config;
    return config.data_x && key === config.data_x || notEmpty(config.data_xs) && hasValue(config.data_xs, key);
};
c3_chart_internal_fn.isNotX = function (key) {
    return !this.isX(key);
};
c3_chart_internal_fn.getXKey = function (id) {
    var $$ = this,
        config = $$.config;
    return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
};
c3_chart_internal_fn.getXValuesOfXKey = function (key, targets) {
    var $$ = this,
        xValues,
        ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
    ids.forEach(function (id) {
        if ($$.getXKey(id) === key) {
            xValues = $$.data.xs[id];
        }
    });
    return xValues;
};
c3_chart_internal_fn.getIndexByX = function (x) {
    var $$ = this,
        data = $$.filterByX($$.data.targets, x);
    return data.length ? data[0].index : null;
};
c3_chart_internal_fn.getXValue = function (id, i) {
    var $$ = this;
    return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
};
c3_chart_internal_fn.getOtherTargetXs = function () {
    var $$ = this,
        idsForX = Object.keys($$.data.xs);
    return idsForX.length ? $$.data.xs[idsForX[0]] : null;
};
c3_chart_internal_fn.getOtherTargetX = function (index) {
    var xs = this.getOtherTargetXs();
    return xs && index < xs.length ? xs[index] : null;
};
c3_chart_internal_fn.addXs = function (xs) {
    var $$ = this;
    Object.keys(xs).forEach(function (id) {
        $$.config.data_xs[id] = xs[id];
    });
};
c3_chart_internal_fn.hasMultipleX = function (xs) {
    return this.d3.set(Object.keys(xs).map(function (id) {
        return xs[id];
    })).size() > 1;
};
c3_chart_internal_fn.isMultipleX = function () {
    return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType('scatter');
};
c3_chart_internal_fn.addName = function (data) {
    var $$ = this,
        name;
    if (data) {
        name = $$.config.data_names[data.id];
        data.name = name !== undefined ? name : data.id;
    }
    return data;
};
c3_chart_internal_fn.getValueOnIndex = function (values, index) {
    var valueOnIndex = values.filter(function (v) {
        return v.index === index;
    });
    return valueOnIndex.length ? valueOnIndex[0] : null;
};
c3_chart_internal_fn.updateTargetX = function (targets, x) {
    var $$ = this;
    targets.forEach(function (t) {
        t.values.forEach(function (v, i) {
            v.x = $$.generateTargetX(x[i], t.id, i);
        });
        $$.data.xs[t.id] = x;
    });
};
c3_chart_internal_fn.updateTargetXs = function (targets, xs) {
    var $$ = this;
    targets.forEach(function (t) {
        if (xs[t.id]) {
            $$.updateTargetX([t], xs[t.id]);
        }
    });
};
c3_chart_internal_fn.generateTargetX = function (rawX, id, index) {
    var $$ = this,
        x;
    if ($$.isTimeSeries()) {
        x = rawX ? $$.parseDate(rawX) : $$.parseDate($$.getXValue(id, index));
    } else if ($$.isCustomX() && !$$.isCategorized()) {
        x = isValue(rawX) ? +rawX : $$.getXValue(id, index);
    } else {
        x = index;
    }
    return x;
};
c3_chart_internal_fn.cloneTarget = function (target) {
    return {
        id: target.id,
        id_org: target.id_org,
        values: target.values.map(function (d) {
            return { x: d.x, value: d.value, id: d.id };
        })
    };
};
c3_chart_internal_fn.updateXs = function () {
    var $$ = this;
    if ($$.data.targets.length) {
        $$.xs = [];
        $$.data.targets[0].values.forEach(function (v) {
            $$.xs[v.index] = v.x;
        });
    }
};
c3_chart_internal_fn.getPrevX = function (i) {
    var x = this.xs[i - 1];
    return typeof x !== 'undefined' ? x : null;
};
c3_chart_internal_fn.getNextX = function (i) {
    var x = this.xs[i + 1];
    return typeof x !== 'undefined' ? x : null;
};
c3_chart_internal_fn.getMaxDataCount = function () {
    var $$ = this;
    return $$.d3.max($$.data.targets, function (t) {
        return t.values.length;
    });
};
c3_chart_internal_fn.getMaxDataCountTarget = function (targets) {
    var length = targets.length,
        max = 0,
        maxTarget;
    if (length > 1) {
        targets.forEach(function (t) {
            if (t.values.length > max) {
                maxTarget = t;
                max = t.values.length;
            }
        });
    } else {
        maxTarget = length ? targets[0] : null;
    }
    return maxTarget;
};
c3_chart_internal_fn.getEdgeX = function (targets) {
    var $$ = this;
    return !targets.length ? [0, 0] : [$$.d3.min(targets, function (t) {
        return t.values[0].x;
    }), $$.d3.max(targets, function (t) {
        return t.values[t.values.length - 1].x;
    })];
};
c3_chart_internal_fn.mapToIds = function (targets) {
    return targets.map(function (d) {
        return d.id;
    });
};
c3_chart_internal_fn.mapToTargetIds = function (ids) {
    var $$ = this;
    return ids ? [].concat(ids) : $$.mapToIds($$.data.targets);
};
c3_chart_internal_fn.hasTarget = function (targets, id) {
    var ids = this.mapToIds(targets),
        i;
    for (i = 0; i < ids.length; i++) {
        if (ids[i] === id) {
            return true;
        }
    }
    return false;
};
c3_chart_internal_fn.isTargetToShow = function (targetId) {
    return this.hiddenTargetIds.indexOf(targetId) < 0;
};
c3_chart_internal_fn.isLegendToShow = function (targetId) {
    return this.hiddenLegendIds.indexOf(targetId) < 0;
};
c3_chart_internal_fn.filterTargetsToShow = function (targets) {
    var $$ = this;
    return targets.filter(function (t) {
        return $$.isTargetToShow(t.id);
    });
};
c3_chart_internal_fn.mapTargetsToUniqueXs = function (targets) {
    var $$ = this;
    var xs = $$.d3.set($$.d3.merge(targets.map(function (t) {
        return t.values.map(function (v) {
            return +v.x;
        });
    }))).values();
    xs = $$.isTimeSeries() ? xs.map(function (x) {
        return new Date(+x);
    }) : xs.map(function (x) {
        return +x;
    });
    return xs.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    });
};
c3_chart_internal_fn.addHiddenTargetIds = function (targetIds) {
    targetIds = targetIds instanceof Array ? targetIds : new Array(targetIds);
    for (var i = 0; i < targetIds.length; i++) {
        if (this.hiddenTargetIds.indexOf(targetIds[i]) < 0) {
            this.hiddenTargetIds = this.hiddenTargetIds.concat(targetIds[i]);
        }
    }
};
c3_chart_internal_fn.removeHiddenTargetIds = function (targetIds) {
    this.hiddenTargetIds = this.hiddenTargetIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};
c3_chart_internal_fn.addHiddenLegendIds = function (targetIds) {
    targetIds = targetIds instanceof Array ? targetIds : new Array(targetIds);
    for (var i = 0; i < targetIds.length; i++) {
        if (this.hiddenLegendIds.indexOf(targetIds[i]) < 0) {
            this.hiddenLegendIds = this.hiddenLegendIds.concat(targetIds[i]);
        }
    }
};
c3_chart_internal_fn.removeHiddenLegendIds = function (targetIds) {
    this.hiddenLegendIds = this.hiddenLegendIds.filter(function (id) {
        return targetIds.indexOf(id) < 0;
    });
};
c3_chart_internal_fn.getValuesAsIdKeyed = function (targets) {
    var ys = {};
    targets.forEach(function (t) {
        ys[t.id] = [];
        t.values.forEach(function (v) {
            ys[t.id].push(v.value);
        });
    });
    return ys;
};
c3_chart_internal_fn.checkValueInTargets = function (targets, checker) {
    var ids = Object.keys(targets),
        i,
        j,
        values;
    for (i = 0; i < ids.length; i++) {
        values = targets[ids[i]].values;
        for (j = 0; j < values.length; j++) {
            if (checker(values[j].value)) {
                return true;
            }
        }
    }
    return false;
};
c3_chart_internal_fn.hasNegativeValueInTargets = function (targets) {
    return this.checkValueInTargets(targets, function (v) {
        return v < 0;
    });
};
c3_chart_internal_fn.hasPositiveValueInTargets = function (targets) {
    return this.checkValueInTargets(targets, function (v) {
        return v > 0;
    });
};
c3_chart_internal_fn.isOrderDesc = function () {
    var config = this.config;
    return typeof config.data_order === 'string' && config.data_order.toLowerCase() === 'desc';
};
c3_chart_internal_fn.isOrderAsc = function () {
    var config = this.config;
    return typeof config.data_order === 'string' && config.data_order.toLowerCase() === 'asc';
};
c3_chart_internal_fn.orderTargets = function (targets) {
    var $$ = this,
        config = $$.config,
        orderAsc = $$.isOrderAsc(),
        orderDesc = $$.isOrderDesc();
    if (orderAsc || orderDesc) {
        targets.sort(function (t1, t2) {
            var reducer = function reducer(p, c) {
                return p + Math.abs(c.value);
            };
            var t1Sum = t1.values.reduce(reducer, 0),
                t2Sum = t2.values.reduce(reducer, 0);
            return orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
        });
    } else if (isFunction(config.data_order)) {
        targets.sort(config.data_order);
    } else if (isArray(config.data_order)) {
        targets.sort(function (t1, t2) {
            return config.data_order.indexOf(t1.id) - config.data_order.indexOf(t2.id);
        });
    }
    return targets;
};
c3_chart_internal_fn.filterByX = function (targets, x) {
    return this.d3.merge(targets.map(function (t) {
        return t.values;
    })).filter(function (v) {
        return v.x - x === 0;
    });
};
c3_chart_internal_fn.filterRemoveNull = function (data) {
    return data.filter(function (d) {
        return isValue(d.value);
    });
};
c3_chart_internal_fn.filterByXDomain = function (targets, xDomain) {
    return targets.map(function (t) {
        return {
            id: t.id,
            id_org: t.id_org,
            values: t.values.filter(function (v) {
                return xDomain[0] <= v.x && v.x <= xDomain[1];
            })
        };
    });
};
c3_chart_internal_fn.hasDataLabel = function () {
    var config = this.config;
    if (typeof config.data_labels === 'boolean' && config.data_labels) {
        return true;
    } else if (_typeof(config.data_labels) === 'object' && notEmpty(config.data_labels)) {
        return true;
    }
    return false;
};
c3_chart_internal_fn.getDataLabelLength = function (min, max, key) {
    var $$ = this,
        lengths = [0, 0],
        paddingCoef = 1.3;
    $$.selectChart.select('svg').selectAll('.dummy').data([min, max]).enter().append('text').text(function (d) {
        return $$.dataLabelFormat(d.id)(d);
    }).each(function (d, i) {
        lengths[i] = this.getBoundingClientRect()[key] * paddingCoef;
    }).remove();
    return lengths;
};
c3_chart_internal_fn.isNoneArc = function (d) {
    return this.hasTarget(this.data.targets, d.id);
}, c3_chart_internal_fn.isArc = function (d) {
    return 'data' in d && this.hasTarget(this.data.targets, d.data.id);
};
c3_chart_internal_fn.findSameXOfValues = function (values, index) {
    var i,
        targetX = values[index].x,
        sames = [];
    for (i = index - 1; i >= 0; i--) {
        if (targetX !== values[i].x) {
            break;
        }
        sames.push(values[i]);
    }
    for (i = index; i < values.length; i++) {
        if (targetX !== values[i].x) {
            break;
        }
        sames.push(values[i]);
    }
    return sames;
};

c3_chart_internal_fn.findClosestFromTargets = function (targets, pos) {
    var $$ = this,
        candidates;

    // map to array of closest points of each target
    candidates = targets.map(function (target) {
        return $$.findClosest(target.values, pos);
    });

    // decide closest point and return
    return $$.findClosest(candidates, pos);
};
c3_chart_internal_fn.findClosest = function (values, pos) {
    var $$ = this,
        minDist = $$.config.point_sensitivity,
        closest;

    // find mouseovering bar
    values.filter(function (v) {
        return v && $$.isBarType(v.id);
    }).forEach(function (v) {
        var shape = $$.main.select('.' + CLASS.bars + $$.getTargetSelectorSuffix(v.id) + ' .' + CLASS.bar + '-' + v.index).node();
        if (!closest && $$.isWithinBar(shape)) {
            closest = v;
        }
    });

    // find closest point from non-bar
    values.filter(function (v) {
        return v && !$$.isBarType(v.id);
    }).forEach(function (v) {
        var d = $$.dist(v, pos);
        if (d < minDist) {
            minDist = d;
            closest = v;
        }
    });

    return closest;
};
c3_chart_internal_fn.dist = function (data, pos) {
    var $$ = this,
        config = $$.config,
        xIndex = config.axis_rotated ? 1 : 0,
        yIndex = config.axis_rotated ? 0 : 1,
        y = $$.circleY(data, data.index),
        x = $$.x(data.x);
    return Math.sqrt(Math.pow(x - pos[xIndex], 2) + Math.pow(y - pos[yIndex], 2));
};
c3_chart_internal_fn.convertValuesToStep = function (values) {
    var converted = [].concat(values),
        i;

    if (!this.isCategorized()) {
        return values;
    }

    for (i = values.length + 1; 0 < i; i--) {
        converted[i] = converted[i - 1];
    }

    converted[0] = {
        x: converted[0].x - 1,
        value: converted[0].value,
        id: converted[0].id
    };
    converted[values.length + 1] = {
        x: converted[values.length].x + 1,
        value: converted[values.length].value,
        id: converted[values.length].id
    };

    return converted;
};
c3_chart_internal_fn.updateDataAttributes = function (name, attrs) {
    var $$ = this,
        config = $$.config,
        current = config['data_' + name];
    if (typeof attrs === 'undefined') {
        return current;
    }
    Object.keys(attrs).forEach(function (id) {
        current[id] = attrs[id];
    });
    $$.redraw({ withLegend: true });
    return current;
};

c3_chart_internal_fn.load = function (targets, args) {
    var $$ = this;
    if (targets) {
        // filter loading targets if needed
        if (args.filter) {
            targets = targets.filter(args.filter);
        }
        // set type if args.types || args.type specified
        if (args.type || args.types) {
            targets.forEach(function (t) {
                var type = args.types && args.types[t.id] ? args.types[t.id] : args.type;
                $$.setTargetType(t.id, type);
            });
        }
        // Update/Add data
        $$.data.targets.forEach(function (d) {
            for (var i = 0; i < targets.length; i++) {
                if (d.id === targets[i].id) {
                    d.values = targets[i].values;
                    targets.splice(i, 1);
                    break;
                }
            }
        });
        $$.data.targets = $$.data.targets.concat(targets); // add remained
    }

    // Set targets
    $$.updateTargets($$.data.targets);

    // Redraw with new targets
    $$.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true });

    if (args.done) {
        args.done();
    }
};
c3_chart_internal_fn.loadFromArgs = function (args) {
    var $$ = this;
    if (args.data) {
        $$.load($$.convertDataToTargets(args.data), args);
    } else if (args.url) {
        $$.convertUrlToData(args.url, args.mimeType, args.headers, args.keys, function (data) {
            $$.load($$.convertDataToTargets(data), args);
        });
    } else if (args.json) {
        $$.load($$.convertDataToTargets($$.convertJsonToData(args.json, args.keys)), args);
    } else if (args.rows) {
        $$.load($$.convertDataToTargets($$.convertRowsToData(args.rows)), args);
    } else if (args.columns) {
        $$.load($$.convertDataToTargets($$.convertColumnsToData(args.columns)), args);
    } else {
        $$.load(null, args);
    }
};
c3_chart_internal_fn.unload = function (targetIds, done) {
    var $$ = this;
    if (!done) {
        done = function done() {};
    }
    // filter existing target
    targetIds = targetIds.filter(function (id) {
        return $$.hasTarget($$.data.targets, id);
    });
    // If no target, call done and return
    if (!targetIds || targetIds.length === 0) {
        done();
        return;
    }
    $$.svg.selectAll(targetIds.map(function (id) {
        return $$.selectorTarget(id);
    })).transition().style('opacity', 0).remove().call($$.endall, done);
    targetIds.forEach(function (id) {
        // Reset fadein for future load
        $$.withoutFadeIn[id] = false;
        // Remove target's elements
        if ($$.legend) {
            $$.legend.selectAll('.' + CLASS.legendItem + $$.getTargetSelectorSuffix(id)).remove();
        }
        // Remove target
        $$.data.targets = $$.data.targets.filter(function (t) {
            return t.id !== id;
        });
    });
};

c3_chart_internal_fn.getYDomainMin = function (targets) {
    var $$ = this,
        config = $$.config,
        ids = $$.mapToIds(targets),
        ys = $$.getValuesAsIdKeyed(targets),
        j,
        k,
        baseId,
        idsInGroup,
        id,
        hasNegativeValue;
    if (config.data_groups.length > 0) {
        hasNegativeValue = $$.hasNegativeValueInTargets(targets);
        for (j = 0; j < config.data_groups.length; j++) {
            // Determine baseId
            idsInGroup = config.data_groups[j].filter(function (id) {
                return ids.indexOf(id) >= 0;
            });
            if (idsInGroup.length === 0) {
                continue;
            }
            baseId = idsInGroup[0];
            // Consider negative values
            if (hasNegativeValue && ys[baseId]) {
                ys[baseId].forEach(function (v, i) {
                    ys[baseId][i] = v < 0 ? v : 0;
                });
            }
            // Compute min
            for (k = 1; k < idsInGroup.length; k++) {
                id = idsInGroup[k];
                if (!ys[id]) {
                    continue;
                }
                ys[id].forEach(function (v, i) {
                    if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
                        ys[baseId][i] += +v;
                    }
                });
            }
        }
    }
    return $$.d3.min(Object.keys(ys).map(function (key) {
        return $$.d3.min(ys[key]);
    }));
};
c3_chart_internal_fn.getYDomainMax = function (targets) {
    var $$ = this,
        config = $$.config,
        ids = $$.mapToIds(targets),
        ys = $$.getValuesAsIdKeyed(targets),
        j,
        k,
        baseId,
        idsInGroup,
        id,
        hasPositiveValue;
    if (config.data_groups.length > 0) {
        hasPositiveValue = $$.hasPositiveValueInTargets(targets);
        for (j = 0; j < config.data_groups.length; j++) {
            // Determine baseId
            idsInGroup = config.data_groups[j].filter(function (id) {
                return ids.indexOf(id) >= 0;
            });
            if (idsInGroup.length === 0) {
                continue;
            }
            baseId = idsInGroup[0];
            // Consider positive values
            if (hasPositiveValue && ys[baseId]) {
                ys[baseId].forEach(function (v, i) {
                    ys[baseId][i] = v > 0 ? v : 0;
                });
            }
            // Compute max
            for (k = 1; k < idsInGroup.length; k++) {
                id = idsInGroup[k];
                if (!ys[id]) {
                    continue;
                }
                ys[id].forEach(function (v, i) {
                    if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
                        ys[baseId][i] += +v;
                    }
                });
            }
        }
    }
    return $$.d3.max(Object.keys(ys).map(function (key) {
        return $$.d3.max(ys[key]);
    }));
};
c3_chart_internal_fn.getYDomain = function (targets, axisId, xDomain) {
    var $$ = this,
        config = $$.config,
        targetsByAxisId = targets.filter(function (t) {
        return $$.axis.getId(t.id) === axisId;
    }),
        yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId,
        yMin = axisId === 'y2' ? config.axis_y2_min : config.axis_y_min,
        yMax = axisId === 'y2' ? config.axis_y2_max : config.axis_y_max,
        yDomainMin = $$.getYDomainMin(yTargets),
        yDomainMax = $$.getYDomainMax(yTargets),
        domain,
        domainLength,
        padding,
        padding_top,
        padding_bottom,
        center = axisId === 'y2' ? config.axis_y2_center : config.axis_y_center,
        yDomainAbs,
        lengths,
        diff,
        ratio,
        isAllPositive,
        isAllNegative,
        isZeroBased = $$.hasType('bar', yTargets) && config.bar_zerobased || $$.hasType('area', yTargets) && config.area_zerobased,
        isInverted = axisId === 'y2' ? config.axis_y2_inverted : config.axis_y_inverted,
        showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
        showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;

    // MEMO: avoid inverting domain unexpectedly
    yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? yDomainMin < yMax ? yDomainMin : yMax - 10 : yDomainMin;
    yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? yMin < yDomainMax ? yDomainMax : yMin + 10 : yDomainMax;

    if (yTargets.length === 0) {
        // use current domain if target of axisId is none
        return axisId === 'y2' ? $$.y2.domain() : $$.y.domain();
    }
    if (isNaN(yDomainMin)) {
        // set minimum to zero when not number
        yDomainMin = 0;
    }
    if (isNaN(yDomainMax)) {
        // set maximum to have same value as yDomainMin
        yDomainMax = yDomainMin;
    }
    if (yDomainMin === yDomainMax) {
        yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
    }
    isAllPositive = yDomainMin >= 0 && yDomainMax >= 0;
    isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;

    // Cancel zerobased if axis_*_min / axis_*_max specified
    if (isValue(yMin) && isAllPositive || isValue(yMax) && isAllNegative) {
        isZeroBased = false;
    }

    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
        if (isAllPositive) {
            yDomainMin = 0;
        }
        if (isAllNegative) {
            yDomainMax = 0;
        }
    }

    domainLength = Math.abs(yDomainMax - yDomainMin);
    padding = padding_top = padding_bottom = domainLength * 0.1;

    if (typeof center !== 'undefined') {
        yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
        yDomainMax = center + yDomainAbs;
        yDomainMin = center - yDomainAbs;
    }
    // add padding for data label
    if (showHorizontalDataLabel) {
        lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'width');
        diff = diffDomain($$.y.range());
        ratio = [lengths[0] / diff, lengths[1] / diff];
        padding_top += domainLength * (ratio[1] / (1 - ratio[0] - ratio[1]));
        padding_bottom += domainLength * (ratio[0] / (1 - ratio[0] - ratio[1]));
    } else if (showVerticalDataLabel) {
        lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'height');
        padding_top += $$.axis.convertPixelsToAxisPadding(lengths[1], domainLength);
        padding_bottom += $$.axis.convertPixelsToAxisPadding(lengths[0], domainLength);
    }
    if (axisId === 'y' && notEmpty(config.axis_y_padding)) {
        padding_top = $$.axis.getPadding(config.axis_y_padding, 'top', padding_top, domainLength);
        padding_bottom = $$.axis.getPadding(config.axis_y_padding, 'bottom', padding_bottom, domainLength);
    }
    if (axisId === 'y2' && notEmpty(config.axis_y2_padding)) {
        padding_top = $$.axis.getPadding(config.axis_y2_padding, 'top', padding_top, domainLength);
        padding_bottom = $$.axis.getPadding(config.axis_y2_padding, 'bottom', padding_bottom, domainLength);
    }
    // Bar/Area chart should be 0-based if all positive|negative
    if (isZeroBased) {
        if (isAllPositive) {
            padding_bottom = yDomainMin;
        }
        if (isAllNegative) {
            padding_top = -yDomainMax;
        }
    }
    domain = [yDomainMin - padding_bottom, yDomainMax + padding_top];
    return isInverted ? domain.reverse() : domain;
};
c3_chart_internal_fn.getXDomainMin = function (targets) {
    var $$ = this,
        config = $$.config;
    return isDefined(config.axis_x_min) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_min) : config.axis_x_min : $$.d3.min(targets, function (t) {
        return $$.d3.min(t.values, function (v) {
            return v.x;
        });
    });
};
c3_chart_internal_fn.getXDomainMax = function (targets) {
    var $$ = this,
        config = $$.config;
    return isDefined(config.axis_x_max) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_max) : config.axis_x_max : $$.d3.max(targets, function (t) {
        return $$.d3.max(t.values, function (v) {
            return v.x;
        });
    });
};
c3_chart_internal_fn.getXDomainPadding = function (domain) {
    var $$ = this,
        config = $$.config,
        diff = domain[1] - domain[0],
        maxDataCount,
        padding,
        paddingLeft,
        paddingRight;
    if ($$.isCategorized()) {
        padding = 0;
    } else if ($$.hasType('bar')) {
        maxDataCount = $$.getMaxDataCount();
        padding = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : 0.5;
    } else {
        padding = diff * 0.01;
    }
    if (_typeof(config.axis_x_padding) === 'object' && notEmpty(config.axis_x_padding)) {
        paddingLeft = isValue(config.axis_x_padding.left) ? config.axis_x_padding.left : padding;
        paddingRight = isValue(config.axis_x_padding.right) ? config.axis_x_padding.right : padding;
    } else if (typeof config.axis_x_padding === 'number') {
        paddingLeft = paddingRight = config.axis_x_padding;
    } else {
        paddingLeft = paddingRight = padding;
    }
    return { left: paddingLeft, right: paddingRight };
};
c3_chart_internal_fn.getXDomain = function (targets) {
    var $$ = this,
        xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
        firstX = xDomain[0],
        lastX = xDomain[1],
        padding = $$.getXDomainPadding(xDomain),
        min = 0,
        max = 0;
    // show center of x domain if min and max are the same
    if (firstX - lastX === 0 && !$$.isCategorized()) {
        if ($$.isTimeSeries()) {
            firstX = new Date(firstX.getTime() * 0.5);
            lastX = new Date(lastX.getTime() * 1.5);
        } else {
            firstX = firstX === 0 ? 1 : firstX * 0.5;
            lastX = lastX === 0 ? -1 : lastX * 1.5;
        }
    }
    if (firstX || firstX === 0) {
        min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
    }
    if (lastX || lastX === 0) {
        max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
    }
    return [min, max];
};
c3_chart_internal_fn.updateXDomain = function (targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
    var $$ = this,
        config = $$.config;

    if (withUpdateOrgXDomain) {
        $$.x.domain(domain ? domain : $$.d3.extent($$.getXDomain(targets)));
        $$.orgXDomain = $$.x.domain();
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x).updateScaleExtent();
        }
        $$.subX.domain($$.x.domain());
        if ($$.brush) {
            $$.brush.scale($$.subX);
        }
    }
    if (withUpdateXDomain) {
        $$.x.domain(domain ? domain : !$$.brush || $$.brush.empty() ? $$.orgXDomain : $$.brush.extent());
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x).updateScaleExtent();
        }
    }

    // Trim domain when too big by zoom mousemove event
    if (withTrim) {
        $$.x.domain($$.trimXDomain($$.x.orgDomain()));
    }

    return $$.x.domain();
};
c3_chart_internal_fn.trimXDomain = function (domain) {
    var zoomDomain = this.getZoomDomain(),
        min = zoomDomain[0],
        max = zoomDomain[1];
    if (domain[0] <= min) {
        domain[1] = +domain[1] + (min - domain[0]);
        domain[0] = min;
    }
    if (max <= domain[1]) {
        domain[0] = +domain[0] - (domain[1] - max);
        domain[1] = max;
    }
    return domain;
};

c3_chart_internal_fn.drag = function (mouse) {
    var $$ = this,
        config = $$.config,
        main = $$.main,
        d3 = $$.d3;
    var sx, sy, mx, my, minX, maxX, minY, maxY;

    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    if (config.zoom_enabled && !$$.zoom.altDomain) {
        return;
    } // skip if zoomable because of conflict drag dehavior
    if (!config.data_selection_multiple) {
        return;
    } // skip when single selection because drag is used for multiple selection

    sx = $$.dragStart[0];
    sy = $$.dragStart[1];
    mx = mouse[0];
    my = mouse[1];
    minX = Math.min(sx, mx);
    maxX = Math.max(sx, mx);
    minY = config.data_selection_grouped ? $$.margin.top : Math.min(sy, my);
    maxY = config.data_selection_grouped ? $$.height : Math.max(sy, my);

    main.select('.' + CLASS.dragarea).attr('x', minX).attr('y', minY).attr('width', maxX - minX).attr('height', maxY - minY);
    // TODO: binary search when multiple xs
    main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).filter(function (d) {
        return config.data_selection_isselectable(d);
    }).each(function (d, i) {
        var shape = d3.select(this),
            isSelected = shape.classed(CLASS.SELECTED),
            isIncluded = shape.classed(CLASS.INCLUDED),
            _x,
            _y,
            _w,
            _h,
            toggle,
            isWithin = false,
            box;
        if (shape.classed(CLASS.circle)) {
            _x = shape.attr("cx") * 1;
            _y = shape.attr("cy") * 1;
            toggle = $$.togglePoint;
            isWithin = minX < _x && _x < maxX && minY < _y && _y < maxY;
        } else if (shape.classed(CLASS.bar)) {
            box = getPathBox(this);
            _x = box.x;
            _y = box.y;
            _w = box.width;
            _h = box.height;
            toggle = $$.togglePath;
            isWithin = !(maxX < _x || _x + _w < minX) && !(maxY < _y || _y + _h < minY);
        } else {
            // line/area selection not supported yet
            return;
        }
        if (isWithin ^ isIncluded) {
            shape.classed(CLASS.INCLUDED, !isIncluded);
            // TODO: included/unincluded callback here
            shape.classed(CLASS.SELECTED, !isSelected);
            toggle.call($$, !isSelected, shape, d, i);
        }
    });
};

c3_chart_internal_fn.dragstart = function (mouse) {
    var $$ = this,
        config = $$.config;
    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    $$.dragStart = mouse;
    $$.main.select('.' + CLASS.chart).append('rect').attr('class', CLASS.dragarea).style('opacity', 0.1);
    $$.dragging = true;
};

c3_chart_internal_fn.dragend = function () {
    var $$ = this,
        config = $$.config;
    if ($$.hasArcType()) {
        return;
    }
    if (!config.data_selection_enabled) {
        return;
    } // do nothing if not selectable
    $$.main.select('.' + CLASS.dragarea).transition().duration(100).style('opacity', 0).remove();
    $$.main.selectAll('.' + CLASS.shape).classed(CLASS.INCLUDED, false);
    $$.dragging = false;
};

c3_chart_internal_fn.getYFormat = function (forArc) {
    var $$ = this,
        formatForY = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.yFormat,
        formatForY2 = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.y2Format;
    return function (v, ratio, id) {
        var format = $$.axis.getId(id) === 'y2' ? formatForY2 : formatForY;
        return format.call($$, v, ratio);
    };
};
c3_chart_internal_fn.yFormat = function (v) {
    var $$ = this,
        config = $$.config,
        format = config.axis_y_tick_format ? config.axis_y_tick_format : $$.defaultValueFormat;
    return format(v);
};
c3_chart_internal_fn.y2Format = function (v) {
    var $$ = this,
        config = $$.config,
        format = config.axis_y2_tick_format ? config.axis_y2_tick_format : $$.defaultValueFormat;
    return format(v);
};
c3_chart_internal_fn.defaultValueFormat = function (v) {
    return isValue(v) ? +v : "";
};
c3_chart_internal_fn.defaultArcValueFormat = function (v, ratio) {
    return (ratio * 100).toFixed(1) + '%';
};
c3_chart_internal_fn.dataLabelFormat = function (targetId) {
    var $$ = this,
        data_labels = $$.config.data_labels,
        format,
        defaultFormat = function defaultFormat(v) {
        return isValue(v) ? +v : "";
    };
    // find format according to axis id
    if (typeof data_labels.format === 'function') {
        format = data_labels.format;
    } else if (_typeof(data_labels.format) === 'object') {
        if (data_labels.format[targetId]) {
            format = data_labels.format[targetId] === true ? defaultFormat : data_labels.format[targetId];
        } else {
            format = function format() {
                return '';
            };
        }
    } else {
        format = defaultFormat;
    }
    return format;
};

c3_chart_internal_fn.initGrid = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;
    $$.grid = $$.main.append('g').attr("clip-path", $$.clipPathForGrid).attr('class', CLASS.grid);
    if (config.grid_x_show) {
        $$.grid.append("g").attr("class", CLASS.xgrids);
    }
    if (config.grid_y_show) {
        $$.grid.append('g').attr('class', CLASS.ygrids);
    }
    if (config.grid_focus_show) {
        $$.grid.append('g').attr("class", CLASS.xgridFocus).append('line').attr('class', CLASS.xgridFocus);
    }
    $$.xgrid = d3.selectAll([]);
    if (!config.grid_lines_front) {
        $$.initGridLines();
    }
};
c3_chart_internal_fn.initGridLines = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.gridLines = $$.main.append('g').attr("clip-path", $$.clipPathForGrid).attr('class', CLASS.grid + ' ' + CLASS.gridLines);
    $$.gridLines.append('g').attr("class", CLASS.xgridLines);
    $$.gridLines.append('g').attr('class', CLASS.ygridLines);
    $$.xgridLines = d3.selectAll([]);
};
c3_chart_internal_fn.updateXGrid = function (withoutUpdate) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        xgridData = $$.generateGridData(config.grid_x_type, $$.x),
        tickOffset = $$.isCategorized() ? $$.xAxis.tickOffset() : 0;

    $$.xgridAttr = config.axis_rotated ? {
        'x1': 0,
        'x2': $$.width,
        'y1': function y1(d) {
            return $$.x(d) - tickOffset;
        },
        'y2': function y2(d) {
            return $$.x(d) - tickOffset;
        }
    } : {
        'x1': function x1(d) {
            return $$.x(d) + tickOffset;
        },
        'x2': function x2(d) {
            return $$.x(d) + tickOffset;
        },
        'y1': 0,
        'y2': $$.height
    };

    $$.xgrid = $$.main.select('.' + CLASS.xgrids).selectAll('.' + CLASS.xgrid).data(xgridData);
    $$.xgrid.enter().append('line').attr("class", CLASS.xgrid);
    if (!withoutUpdate) {
        $$.xgrid.attr($$.xgridAttr).style("opacity", function () {
            return +d3.select(this).attr(config.axis_rotated ? 'y1' : 'x1') === (config.axis_rotated ? $$.height : 0) ? 0 : 1;
        });
    }
    $$.xgrid.exit().remove();
};

c3_chart_internal_fn.updateYGrid = function () {
    var $$ = this,
        config = $$.config,
        gridValues = $$.yAxis.tickValues() || $$.y.ticks(config.grid_y_ticks);
    $$.ygrid = $$.main.select('.' + CLASS.ygrids).selectAll('.' + CLASS.ygrid).data(gridValues);
    $$.ygrid.enter().append('line').attr('class', CLASS.ygrid);
    $$.ygrid.attr("x1", config.axis_rotated ? $$.y : 0).attr("x2", config.axis_rotated ? $$.y : $$.width).attr("y1", config.axis_rotated ? 0 : $$.y).attr("y2", config.axis_rotated ? $$.height : $$.y);
    $$.ygrid.exit().remove();
    $$.smoothLines($$.ygrid, 'grid');
};

c3_chart_internal_fn.gridTextAnchor = function (d) {
    return d.position ? d.position : "end";
};
c3_chart_internal_fn.gridTextDx = function (d) {
    return d.position === 'start' ? 4 : d.position === 'middle' ? 0 : -4;
};
c3_chart_internal_fn.xGridTextX = function (d) {
    return d.position === 'start' ? -this.height : d.position === 'middle' ? -this.height / 2 : 0;
};
c3_chart_internal_fn.yGridTextX = function (d) {
    return d.position === 'start' ? 0 : d.position === 'middle' ? this.width / 2 : this.width;
};
c3_chart_internal_fn.updateGrid = function (duration) {
    var $$ = this,
        main = $$.main,
        config = $$.config,
        xgridLine,
        ygridLine,
        yv;

    // hide if arc type
    $$.grid.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

    main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
    if (config.grid_x_show) {
        $$.updateXGrid();
    }
    $$.xgridLines = main.select('.' + CLASS.xgridLines).selectAll('.' + CLASS.xgridLine).data(config.grid_x_lines);
    // enter
    xgridLine = $$.xgridLines.enter().append('g').attr("class", function (d) {
        return CLASS.xgridLine + (d['class'] ? ' ' + d['class'] : '');
    });
    xgridLine.append('line').style("opacity", 0);
    xgridLine.append('text').attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "" : "rotate(-90)").attr('dx', $$.gridTextDx).attr('dy', -5).style("opacity", 0);
    // udpate
    // done in d3.transition() of the end of this function
    // exit
    $$.xgridLines.exit().transition().duration(duration).style("opacity", 0).remove();

    // Y-Grid
    if (config.grid_y_show) {
        $$.updateYGrid();
    }
    $$.ygridLines = main.select('.' + CLASS.ygridLines).selectAll('.' + CLASS.ygridLine).data(config.grid_y_lines);
    // enter
    ygridLine = $$.ygridLines.enter().append('g').attr("class", function (d) {
        return CLASS.ygridLine + (d['class'] ? ' ' + d['class'] : '');
    });
    ygridLine.append('line').style("opacity", 0);
    ygridLine.append('text').attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "rotate(-90)" : "").attr('dx', $$.gridTextDx).attr('dy', -5).style("opacity", 0);
    // update
    yv = $$.yv.bind($$);
    $$.ygridLines.select('line').transition().duration(duration).attr("x1", config.axis_rotated ? yv : 0).attr("x2", config.axis_rotated ? yv : $$.width).attr("y1", config.axis_rotated ? 0 : yv).attr("y2", config.axis_rotated ? $$.height : yv).style("opacity", 1);
    $$.ygridLines.select('text').transition().duration(duration).attr("x", config.axis_rotated ? $$.xGridTextX.bind($$) : $$.yGridTextX.bind($$)).attr("y", yv).text(function (d) {
        return d.text;
    }).style("opacity", 1);
    // exit
    $$.ygridLines.exit().transition().duration(duration).style("opacity", 0).remove();
};
c3_chart_internal_fn.redrawGrid = function (withTransition) {
    var $$ = this,
        config = $$.config,
        xv = $$.xv.bind($$),
        lines = $$.xgridLines.select('line'),
        texts = $$.xgridLines.select('text');
    return [(withTransition ? lines.transition() : lines).attr("x1", config.axis_rotated ? 0 : xv).attr("x2", config.axis_rotated ? $$.width : xv).attr("y1", config.axis_rotated ? xv : 0).attr("y2", config.axis_rotated ? xv : $$.height).style("opacity", 1), (withTransition ? texts.transition() : texts).attr("x", config.axis_rotated ? $$.yGridTextX.bind($$) : $$.xGridTextX.bind($$)).attr("y", xv).text(function (d) {
        return d.text;
    }).style("opacity", 1)];
};
c3_chart_internal_fn.showXGridFocus = function (selectedData) {
    var $$ = this,
        config = $$.config,
        dataToShow = selectedData.filter(function (d) {
        return d && isValue(d.value);
    }),
        focusEl = $$.main.selectAll('line.' + CLASS.xgridFocus),
        xx = $$.xx.bind($$);
    if (!config.tooltip_show) {
        return;
    }
    // Hide when scatter plot exists
    if ($$.hasType('scatter') || $$.hasArcType()) {
        return;
    }
    focusEl.style("visibility", "visible").data([dataToShow[0]]).attr(config.axis_rotated ? 'y1' : 'x1', xx).attr(config.axis_rotated ? 'y2' : 'x2', xx);
    $$.smoothLines(focusEl, 'grid');
};
c3_chart_internal_fn.hideXGridFocus = function () {
    this.main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
};
c3_chart_internal_fn.updateXgridFocus = function () {
    var $$ = this,
        config = $$.config;
    $$.main.select('line.' + CLASS.xgridFocus).attr("x1", config.axis_rotated ? 0 : -10).attr("x2", config.axis_rotated ? $$.width : -10).attr("y1", config.axis_rotated ? -10 : 0).attr("y2", config.axis_rotated ? -10 : $$.height);
};
c3_chart_internal_fn.generateGridData = function (type, scale) {
    var $$ = this,
        gridData = [],
        xDomain,
        firstYear,
        lastYear,
        i,
        tickNum = $$.main.select("." + CLASS.axisX).selectAll('.tick').size();
    if (type === 'year') {
        xDomain = $$.getXDomain();
        firstYear = xDomain[0].getFullYear();
        lastYear = xDomain[1].getFullYear();
        for (i = firstYear; i <= lastYear; i++) {
            gridData.push(new Date(i + '-01-01 00:00:00'));
        }
    } else {
        gridData = scale.ticks(10);
        if (gridData.length > tickNum) {
            // use only int
            gridData = gridData.filter(function (d) {
                return ("" + d).indexOf('.') < 0;
            });
        }
    }
    return gridData;
};
c3_chart_internal_fn.getGridFilterToRemove = function (params) {
    return params ? function (line) {
        var found = false;
        [].concat(params).forEach(function (param) {
            if ('value' in param && line.value === param.value || 'class' in param && line['class'] === param['class']) {
                found = true;
            }
        });
        return found;
    } : function () {
        return true;
    };
};
c3_chart_internal_fn.removeGridLines = function (params, forX) {
    var $$ = this,
        config = $$.config,
        toRemove = $$.getGridFilterToRemove(params),
        toShow = function toShow(line) {
        return !toRemove(line);
    },
        classLines = forX ? CLASS.xgridLines : CLASS.ygridLines,
        classLine = forX ? CLASS.xgridLine : CLASS.ygridLine;
    $$.main.select('.' + classLines).selectAll('.' + classLine).filter(toRemove).transition().duration(config.transition_duration).style('opacity', 0).remove();
    if (forX) {
        config.grid_x_lines = config.grid_x_lines.filter(toShow);
    } else {
        config.grid_y_lines = config.grid_y_lines.filter(toShow);
    }
};

c3_chart_internal_fn.initEventRect = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.eventRects).style('fill-opacity', 0);
};
c3_chart_internal_fn.redrawEventRect = function () {
    var $$ = this,
        config = $$.config,
        eventRectUpdate,
        maxDataCountTarget,
        isMultipleX = $$.isMultipleX();

    // rects for mouseover
    var eventRects = $$.main.select('.' + CLASS.eventRects).style('cursor', config.zoom_enabled ? config.axis_rotated ? 'ns-resize' : 'ew-resize' : null).classed(CLASS.eventRectsMultiple, isMultipleX).classed(CLASS.eventRectsSingle, !isMultipleX);

    // clear old rects
    eventRects.selectAll('.' + CLASS.eventRect).remove();

    // open as public variable
    $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);

    if (isMultipleX) {
        eventRectUpdate = $$.eventRect.data([0]);
        // enter : only one rect will be added
        $$.generateEventRectsForMultipleXs(eventRectUpdate.enter());
        // update
        $$.updateEventRect(eventRectUpdate);
        // exit : not needed because always only one rect exists
    } else {
        // Set data and update $$.eventRect
        maxDataCountTarget = $$.getMaxDataCountTarget($$.data.targets);
        eventRects.datum(maxDataCountTarget ? maxDataCountTarget.values : []);
        $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);
        eventRectUpdate = $$.eventRect.data(function (d) {
            return d;
        });
        // enter
        $$.generateEventRectsForSingleX(eventRectUpdate.enter());
        // update
        $$.updateEventRect(eventRectUpdate);
        // exit
        eventRectUpdate.exit().remove();
    }
};
c3_chart_internal_fn.updateEventRect = function (eventRectUpdate) {
    var $$ = this,
        config = $$.config,
        x,
        y,
        w,
        h,
        rectW,
        rectX;

    // set update selection if null
    eventRectUpdate = eventRectUpdate || $$.eventRect.data(function (d) {
        return d;
    });

    if ($$.isMultipleX()) {
        // TODO: rotated not supported yet
        x = 0;
        y = 0;
        w = $$.width;
        h = $$.height;
    } else {
        if (($$.isCustomX() || $$.isTimeSeries()) && !$$.isCategorized()) {

            // update index for x that is used by prevX and nextX
            $$.updateXs();

            rectW = function rectW(d) {
                var prevX = $$.getPrevX(d.index),
                    nextX = $$.getNextX(d.index);

                // if there this is a single data point make the eventRect full width (or height)
                if (prevX === null && nextX === null) {
                    return config.axis_rotated ? $$.height : $$.width;
                }

                if (prevX === null) {
                    prevX = $$.x.domain()[0];
                }
                if (nextX === null) {
                    nextX = $$.x.domain()[1];
                }

                return Math.max(0, ($$.x(nextX) - $$.x(prevX)) / 2);
            };
            rectX = function rectX(d) {
                var prevX = $$.getPrevX(d.index),
                    nextX = $$.getNextX(d.index),
                    thisX = $$.data.xs[d.id][d.index];

                // if there this is a single data point position the eventRect at 0
                if (prevX === null && nextX === null) {
                    return 0;
                }

                if (prevX === null) {
                    prevX = $$.x.domain()[0];
                }

                return ($$.x(thisX) + $$.x(prevX)) / 2;
            };
        } else {
            rectW = $$.getEventRectWidth();
            rectX = function rectX(d) {
                return $$.x(d.x) - rectW / 2;
            };
        }
        x = config.axis_rotated ? 0 : rectX;
        y = config.axis_rotated ? rectX : 0;
        w = config.axis_rotated ? $$.width : rectW;
        h = config.axis_rotated ? rectW : $$.height;
    }

    eventRectUpdate.attr('class', $$.classEvent.bind($$)).attr("x", x).attr("y", y).attr("width", w).attr("height", h);
};
c3_chart_internal_fn.generateEventRectsForSingleX = function (eventRectEnter) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;
    eventRectEnter.append("rect").attr("class", $$.classEvent.bind($$)).style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on('mouseover', function (d) {
        var index = d.index;

        if ($$.dragging || $$.flowing) {
            return;
        } // do nothing while dragging/flowing
        if ($$.hasArcType()) {
            return;
        }

        // Expand shapes for selection
        if (config.point_focus_expand_enabled) {
            $$.expandCircles(index, null, true);
        }
        $$.expandBars(index, null, true);

        // Call event handler
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            config.data_onmouseover.call($$.api, d);
        });
    }).on('mouseout', function (d) {
        var index = d.index;
        if (!$$.config) {
            return;
        } // chart is destroyed
        if ($$.hasArcType()) {
            return;
        }
        $$.hideXGridFocus();
        $$.hideTooltip();
        // Undo expanded shapes
        $$.unexpandCircles();
        $$.unexpandBars();
        // Call event handler
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            config.data_onmouseout.call($$.api, d);
        });
    }).on('mousemove', function (d) {
        var selectedData,
            index = d.index,
            eventRect = $$.svg.select('.' + CLASS.eventRect + '-' + index);

        if ($$.dragging || $$.flowing) {
            return;
        } // do nothing while dragging/flowing
        if ($$.hasArcType()) {
            return;
        }

        if ($$.isStepType(d) && $$.config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
            index -= 1;
        }

        // Show tooltip
        selectedData = $$.filterTargetsToShow($$.data.targets).map(function (t) {
            return $$.addName($$.getValueOnIndex(t.values, index));
        });

        if (config.tooltip_grouped) {
            $$.showTooltip(selectedData, this);
            $$.showXGridFocus(selectedData);
        }

        if (config.tooltip_grouped && (!config.data_selection_enabled || config.data_selection_grouped)) {
            return;
        }

        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function () {
            d3.select(this).classed(CLASS.EXPANDED, true);
            if (config.data_selection_enabled) {
                eventRect.style('cursor', config.data_selection_grouped ? 'pointer' : null);
            }
            if (!config.tooltip_grouped) {
                $$.hideXGridFocus();
                $$.hideTooltip();
                if (!config.data_selection_grouped) {
                    $$.unexpandCircles(index);
                    $$.unexpandBars(index);
                }
            }
        }).filter(function (d) {
            return $$.isWithinShape(this, d);
        }).each(function (d) {
            if (config.data_selection_enabled && (config.data_selection_grouped || config.data_selection_isselectable(d))) {
                eventRect.style('cursor', 'pointer');
            }
            if (!config.tooltip_grouped) {
                $$.showTooltip([d], this);
                $$.showXGridFocus([d]);
                if (config.point_focus_expand_enabled) {
                    $$.expandCircles(index, d.id, true);
                }
                $$.expandBars(index, d.id, true);
            }
        });
    }).on('click', function (d) {
        var index = d.index;
        if ($$.hasArcType() || !$$.toggleShape) {
            return;
        }
        if ($$.cancelClick) {
            $$.cancelClick = false;
            return;
        }
        if ($$.isStepType(d) && config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
            index -= 1;
        }
        $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
            if (config.data_selection_grouped || $$.isWithinShape(this, d)) {
                $$.toggleShape(this, d, index);
                $$.config.data_onclick.call($$.api, d, this);
            }
        });
    }).call(config.data_selection_draggable && $$.drag ? d3.behavior.drag().origin(Object).on('drag', function () {
        $$.drag(d3.mouse(this));
    }).on('dragstart', function () {
        $$.dragstart(d3.mouse(this));
    }).on('dragend', function () {
        $$.dragend();
    }) : function () {});
};

c3_chart_internal_fn.generateEventRectsForMultipleXs = function (eventRectEnter) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config;

    function mouseout() {
        $$.svg.select('.' + CLASS.eventRect).style('cursor', null);
        $$.hideXGridFocus();
        $$.hideTooltip();
        $$.unexpandCircles();
        $$.unexpandBars();
    }

    eventRectEnter.append('rect').attr('x', 0).attr('y', 0).attr('width', $$.width).attr('height', $$.height).attr('class', CLASS.eventRect).on('mouseout', function () {
        if (!$$.config) {
            return;
        } // chart is destroyed
        if ($$.hasArcType()) {
            return;
        }
        mouseout();
    }).on('mousemove', function () {
        var targetsToShow = $$.filterTargetsToShow($$.data.targets);
        var mouse, closest, sameXData, selectedData;

        if ($$.dragging) {
            return;
        } // do nothing when dragging
        if ($$.hasArcType(targetsToShow)) {
            return;
        }

        mouse = d3.mouse(this);
        closest = $$.findClosestFromTargets(targetsToShow, mouse);

        if ($$.mouseover && (!closest || closest.id !== $$.mouseover.id)) {
            config.data_onmouseout.call($$.api, $$.mouseover);
            $$.mouseover = undefined;
        }

        if (!closest) {
            mouseout();
            return;
        }

        if ($$.isScatterType(closest) || !config.tooltip_grouped) {
            sameXData = [closest];
        } else {
            sameXData = $$.filterByX(targetsToShow, closest.x);
        }

        // show tooltip when cursor is close to some point
        selectedData = sameXData.map(function (d) {
            return $$.addName(d);
        });
        $$.showTooltip(selectedData, this);

        // expand points
        if (config.point_focus_expand_enabled) {
            $$.expandCircles(closest.index, closest.id, true);
        }
        $$.expandBars(closest.index, closest.id, true);

        // Show xgrid focus line
        $$.showXGridFocus(selectedData);

        // Show cursor as pointer if point is close to mouse position
        if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
            $$.svg.select('.' + CLASS.eventRect).style('cursor', 'pointer');
            if (!$$.mouseover) {
                config.data_onmouseover.call($$.api, closest);
                $$.mouseover = closest;
            }
        }
    }).on('click', function () {
        var targetsToShow = $$.filterTargetsToShow($$.data.targets);
        var mouse, closest;
        if ($$.hasArcType(targetsToShow)) {
            return;
        }

        mouse = d3.mouse(this);
        closest = $$.findClosestFromTargets(targetsToShow, mouse);
        if (!closest) {
            return;
        }
        // select if selection enabled
        if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
            $$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll('.' + CLASS.shape + '-' + closest.index).each(function () {
                if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
                    $$.toggleShape(this, closest, closest.index);
                    $$.config.data_onclick.call($$.api, closest, this);
                }
            });
        }
    }).call(config.data_selection_draggable && $$.drag ? d3.behavior.drag().origin(Object).on('drag', function () {
        $$.drag(d3.mouse(this));
    }).on('dragstart', function () {
        $$.dragstart(d3.mouse(this));
    }).on('dragend', function () {
        $$.dragend();
    }) : function () {});
};
c3_chart_internal_fn.dispatchEvent = function (type, index, mouse) {
    var $$ = this,
        selector = '.' + CLASS.eventRect + (!$$.isMultipleX() ? '-' + index : ''),
        eventRect = $$.main.select(selector).node(),
        box = eventRect.getBoundingClientRect(),
        x = box.left + (mouse ? mouse[0] : 0),
        y = box.top + (mouse ? mouse[1] : 0),
        event = document.createEvent("MouseEvents");

    event.initMouseEvent(type, true, true, window, 0, x, y, x, y, false, false, false, false, 0, null);
    eventRect.dispatchEvent(event);
};

c3_chart_internal_fn.initLegend = function () {
    var $$ = this;
    $$.legendItemTextBox = {};
    $$.legendHasRendered = false;
    $$.legend = $$.svg.append("g").attr("transform", $$.getTranslate('legend'));
    if (!$$.config.legend_show) {
        $$.legend.style('visibility', 'hidden');
        $$.hiddenLegendIds = $$.mapToIds($$.data.targets);
        return;
    }
    // MEMO: call here to update legend box and tranlate for all
    // MEMO: translate will be upated by this, so transform not needed in updateLegend()
    $$.updateLegendWithDefaults();
};
c3_chart_internal_fn.updateLegendWithDefaults = function () {
    var $$ = this;
    $$.updateLegend($$.mapToIds($$.data.targets), { withTransform: false, withTransitionForTransform: false, withTransition: false });
};
c3_chart_internal_fn.updateSizeForLegend = function (legendHeight, legendWidth) {
    var $$ = this,
        config = $$.config,
        insetLegendPosition = {
        top: $$.isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : $$.currentHeight - legendHeight - $$.getCurrentPaddingBottom() - config.legend_inset_y,
        left: $$.isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : $$.currentWidth - legendWidth - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
    };

    $$.margin3 = {
        top: $$.isLegendRight ? 0 : $$.isLegendInset ? insetLegendPosition.top : $$.currentHeight - legendHeight,
        right: NaN,
        bottom: 0,
        left: $$.isLegendRight ? $$.currentWidth - legendWidth : $$.isLegendInset ? insetLegendPosition.left : 0
    };
};
c3_chart_internal_fn.transformLegend = function (withTransition) {
    var $$ = this;
    (withTransition ? $$.legend.transition() : $$.legend).attr("transform", $$.getTranslate('legend'));
};
c3_chart_internal_fn.updateLegendStep = function (step) {
    this.legendStep = step;
};
c3_chart_internal_fn.updateLegendItemWidth = function (w) {
    this.legendItemWidth = w;
};
c3_chart_internal_fn.updateLegendItemHeight = function (h) {
    this.legendItemHeight = h;
};
c3_chart_internal_fn.getLegendWidth = function () {
    var $$ = this;
    return $$.config.legend_show ? $$.isLegendRight || $$.isLegendInset ? $$.legendItemWidth * ($$.legendStep + 1) : $$.currentWidth : 0;
};
c3_chart_internal_fn.getLegendHeight = function () {
    var $$ = this,
        h = 0;
    if ($$.config.legend_show) {
        if ($$.isLegendRight) {
            h = $$.currentHeight;
        } else {
            h = Math.max(20, $$.legendItemHeight) * ($$.legendStep + 1);
        }
    }
    return h;
};
c3_chart_internal_fn.opacityForLegend = function (legendItem) {
    return legendItem.classed(CLASS.legendItemHidden) ? null : 1;
};
c3_chart_internal_fn.opacityForUnfocusedLegend = function (legendItem) {
    return legendItem.classed(CLASS.legendItemHidden) ? null : 0.3;
};
c3_chart_internal_fn.toggleFocusLegend = function (targetIds, focus) {
    var $$ = this;
    targetIds = $$.mapToTargetIds(targetIds);
    $$.legend.selectAll('.' + CLASS.legendItem).filter(function (id) {
        return targetIds.indexOf(id) >= 0;
    }).classed(CLASS.legendItemFocused, focus).transition().duration(100).style('opacity', function () {
        var opacity = focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend;
        return opacity.call($$, $$.d3.select(this));
    });
};
c3_chart_internal_fn.revertLegend = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.legend.selectAll('.' + CLASS.legendItem).classed(CLASS.legendItemFocused, false).transition().duration(100).style('opacity', function () {
        return $$.opacityForLegend(d3.select(this));
    });
};
c3_chart_internal_fn.showLegend = function (targetIds) {
    var $$ = this,
        config = $$.config;
    if (!config.legend_show) {
        config.legend_show = true;
        $$.legend.style('visibility', 'visible');
        if (!$$.legendHasRendered) {
            $$.updateLegendWithDefaults();
        }
    }
    $$.removeHiddenLegendIds(targetIds);
    $$.legend.selectAll($$.selectorLegends(targetIds)).style('visibility', 'visible').transition().style('opacity', function () {
        return $$.opacityForLegend($$.d3.select(this));
    });
};
c3_chart_internal_fn.hideLegend = function (targetIds) {
    var $$ = this,
        config = $$.config;
    if (config.legend_show && isEmpty(targetIds)) {
        config.legend_show = false;
        $$.legend.style('visibility', 'hidden');
    }
    $$.addHiddenLegendIds(targetIds);
    $$.legend.selectAll($$.selectorLegends(targetIds)).style('opacity', 0).style('visibility', 'hidden');
};
c3_chart_internal_fn.clearLegendItemTextBoxCache = function () {
    this.legendItemTextBox = {};
};
c3_chart_internal_fn.updateLegend = function (targetIds, options, transitions) {
    var $$ = this,
        config = $$.config;
    var xForLegend, xForLegendText, xForLegendRect, yForLegend, yForLegendText, yForLegendRect, x1ForLegendTile, x2ForLegendTile, yForLegendTile;
    var paddingTop = 4,
        paddingRight = 10,
        maxWidth = 0,
        maxHeight = 0,
        posMin = 10,
        tileWidth = config.legend_item_tile_width + 5;
    var l,
        totalLength = 0,
        offsets = {},
        widths = {},
        heights = {},
        margins = [0],
        steps = {},
        step = 0;
    var withTransition, withTransitionForTransform;
    var texts, rects, tiles, background;

    // Skip elements when their name is set to null
    targetIds = targetIds.filter(function (id) {
        return !isDefined(config.data_names[id]) || config.data_names[id] !== null;
    });

    options = options || {};
    withTransition = getOption(options, "withTransition", true);
    withTransitionForTransform = getOption(options, "withTransitionForTransform", true);

    function getTextBox(textElement, id) {
        if (!$$.legendItemTextBox[id]) {
            $$.legendItemTextBox[id] = $$.getTextRect(textElement.textContent, CLASS.legendItem, textElement);
        }
        return $$.legendItemTextBox[id];
    }

    function updatePositions(textElement, id, index) {
        var reset = index === 0,
            isLast = index === targetIds.length - 1,
            box = getTextBox(textElement, id),
            itemWidth = box.width + tileWidth + (isLast && !($$.isLegendRight || $$.isLegendInset) ? 0 : paddingRight) + config.legend_padding,
            itemHeight = box.height + paddingTop,
            itemLength = $$.isLegendRight || $$.isLegendInset ? itemHeight : itemWidth,
            areaLength = $$.isLegendRight || $$.isLegendInset ? $$.getLegendHeight() : $$.getLegendWidth(),
            margin,
            maxLength;

        // MEMO: care about condifion of step, totalLength
        function updateValues(id, withoutStep) {
            if (!withoutStep) {
                margin = (areaLength - totalLength - itemLength) / 2;
                if (margin < posMin) {
                    margin = (areaLength - itemLength) / 2;
                    totalLength = 0;
                    step++;
                }
            }
            steps[id] = step;
            margins[step] = $$.isLegendInset ? 10 : margin;
            offsets[id] = totalLength;
            totalLength += itemLength;
        }

        if (reset) {
            totalLength = 0;
            step = 0;
            maxWidth = 0;
            maxHeight = 0;
        }

        if (config.legend_show && !$$.isLegendToShow(id)) {
            widths[id] = heights[id] = steps[id] = offsets[id] = 0;
            return;
        }

        widths[id] = itemWidth;
        heights[id] = itemHeight;

        if (!maxWidth || itemWidth >= maxWidth) {
            maxWidth = itemWidth;
        }
        if (!maxHeight || itemHeight >= maxHeight) {
            maxHeight = itemHeight;
        }
        maxLength = $$.isLegendRight || $$.isLegendInset ? maxHeight : maxWidth;

        if (config.legend_equally) {
            Object.keys(widths).forEach(function (id) {
                widths[id] = maxWidth;
            });
            Object.keys(heights).forEach(function (id) {
                heights[id] = maxHeight;
            });
            margin = (areaLength - maxLength * targetIds.length) / 2;
            if (margin < posMin) {
                totalLength = 0;
                step = 0;
                targetIds.forEach(function (id) {
                    updateValues(id);
                });
            } else {
                updateValues(id, true);
            }
        } else {
            updateValues(id);
        }
    }

    if ($$.isLegendInset) {
        step = config.legend_inset_step ? config.legend_inset_step : targetIds.length;
        $$.updateLegendStep(step);
    }

    if ($$.isLegendRight) {
        xForLegend = function xForLegend(id) {
            return maxWidth * steps[id];
        };
        yForLegend = function yForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
    } else if ($$.isLegendInset) {
        xForLegend = function xForLegend(id) {
            return maxWidth * steps[id] + 10;
        };
        yForLegend = function yForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
    } else {
        xForLegend = function xForLegend(id) {
            return margins[steps[id]] + offsets[id];
        };
        yForLegend = function yForLegend(id) {
            return maxHeight * steps[id];
        };
    }
    xForLegendText = function xForLegendText(id, i) {
        return xForLegend(id, i) + 4 + config.legend_item_tile_width;
    };
    yForLegendText = function yForLegendText(id, i) {
        return yForLegend(id, i) + 9;
    };
    xForLegendRect = function xForLegendRect(id, i) {
        return xForLegend(id, i);
    };
    yForLegendRect = function yForLegendRect(id, i) {
        return yForLegend(id, i) - 5;
    };
    x1ForLegendTile = function x1ForLegendTile(id, i) {
        return xForLegend(id, i) - 2;
    };
    x2ForLegendTile = function x2ForLegendTile(id, i) {
        return xForLegend(id, i) - 2 + config.legend_item_tile_width;
    };
    yForLegendTile = function yForLegendTile(id, i) {
        return yForLegend(id, i) + 4;
    };

    // Define g for legend area
    l = $$.legend.selectAll('.' + CLASS.legendItem).data(targetIds).enter().append('g').attr('class', function (id) {
        return $$.generateClass(CLASS.legendItem, id);
    }).style('visibility', function (id) {
        return $$.isLegendToShow(id) ? 'visible' : 'hidden';
    }).style('cursor', 'pointer').on('click', function (id) {
        if (config.legend_item_onclick) {
            config.legend_item_onclick.call($$, id);
        } else {
            if ($$.d3.event.altKey) {
                $$.api.hide();
                $$.api.show(id);
            } else {
                $$.api.toggle(id);
                $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert();
            }
        }
    }).on('mouseover', function (id) {
        if (config.legend_item_onmouseover) {
            config.legend_item_onmouseover.call($$, id);
        } else {
            $$.d3.select(this).classed(CLASS.legendItemFocused, true);
            if (!$$.transiting && $$.isTargetToShow(id)) {
                $$.api.focus(id);
            }
        }
    }).on('mouseout', function (id) {
        if (config.legend_item_onmouseout) {
            config.legend_item_onmouseout.call($$, id);
        } else {
            $$.d3.select(this).classed(CLASS.legendItemFocused, false);
            $$.api.revert();
        }
    });
    l.append('text').text(function (id) {
        return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    }).each(function (id, i) {
        updatePositions(this, id, i);
    }).style("pointer-events", "none").attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200).attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendText);
    l.append('rect').attr("class", CLASS.legendItemEvent).style('fill-opacity', 0).attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendRect : -200).attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendRect);
    l.append('line').attr('class', CLASS.legendItemTile).style('stroke', $$.color).style("pointer-events", "none").attr('x1', $$.isLegendRight || $$.isLegendInset ? x1ForLegendTile : -200).attr('y1', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr('x2', $$.isLegendRight || $$.isLegendInset ? x2ForLegendTile : -200).attr('y2', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr('stroke-width', config.legend_item_tile_height);

    // Set background for inset legend
    background = $$.legend.select('.' + CLASS.legendBackground + ' rect');
    if ($$.isLegendInset && maxWidth > 0 && background.size() === 0) {
        background = $$.legend.insert('g', '.' + CLASS.legendItem).attr("class", CLASS.legendBackground).append('rect');
    }

    texts = $$.legend.selectAll('text').data(targetIds).text(function (id) {
        return isDefined(config.data_names[id]) ? config.data_names[id] : id;
    } // MEMO: needed for update
    ).each(function (id, i) {
        updatePositions(this, id, i);
    });
    (withTransition ? texts.transition() : texts).attr('x', xForLegendText).attr('y', yForLegendText);

    rects = $$.legend.selectAll('rect.' + CLASS.legendItemEvent).data(targetIds);
    (withTransition ? rects.transition() : rects).attr('width', function (id) {
        return widths[id];
    }).attr('height', function (id) {
        return heights[id];
    }).attr('x', xForLegendRect).attr('y', yForLegendRect);

    tiles = $$.legend.selectAll('line.' + CLASS.legendItemTile).data(targetIds);
    (withTransition ? tiles.transition() : tiles).style('stroke', $$.color).attr('x1', x1ForLegendTile).attr('y1', yForLegendTile).attr('x2', x2ForLegendTile).attr('y2', yForLegendTile);

    if (background) {
        (withTransition ? background.transition() : background).attr('height', $$.getLegendHeight() - 12).attr('width', maxWidth * (step + 1) + 10);
    }

    // toggle legend state
    $$.legend.selectAll('.' + CLASS.legendItem).classed(CLASS.legendItemHidden, function (id) {
        return !$$.isTargetToShow(id);
    });

    // Update all to reflect change of legend
    $$.updateLegendItemWidth(maxWidth);
    $$.updateLegendItemHeight(maxHeight);
    $$.updateLegendStep(step);
    // Update size and scale
    $$.updateSizes();
    $$.updateScales();
    $$.updateSvgSize();
    // Update g positions
    $$.transformAll(withTransitionForTransform, transitions);
    $$.legendHasRendered = true;
};

c3_chart_internal_fn.initRegion = function () {
    var $$ = this;
    $$.region = $$.main.append('g').attr("clip-path", $$.clipPath).attr("class", CLASS.regions);
};
c3_chart_internal_fn.updateRegion = function (duration) {
    var $$ = this,
        config = $$.config;

    // hide if arc type
    $$.region.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

    $$.mainRegion = $$.main.select('.' + CLASS.regions).selectAll('.' + CLASS.region).data(config.regions);
    $$.mainRegion.enter().append('g').append('rect').style("fill-opacity", 0);
    $$.mainRegion.attr('class', $$.classRegion.bind($$));
    $$.mainRegion.exit().transition().duration(duration).style("opacity", 0).remove();
};
c3_chart_internal_fn.redrawRegion = function (withTransition) {
    var $$ = this,
        regions = $$.mainRegion.selectAll('rect').each(function () {
        // data is binded to g and it's not transferred to rect (child node) automatically,
        // then data of each rect has to be updated manually.
        // TODO: there should be more efficient way to solve this?
        var parentData = $$.d3.select(this.parentNode).datum();
        $$.d3.select(this).datum(parentData);
    }),
        x = $$.regionX.bind($$),
        y = $$.regionY.bind($$),
        w = $$.regionWidth.bind($$),
        h = $$.regionHeight.bind($$);
    return [(withTransition ? regions.transition() : regions).attr("x", x).attr("y", y).attr("width", w).attr("height", h).style("fill-opacity", function (d) {
        return isValue(d.opacity) ? d.opacity : 0.1;
    })];
};
c3_chart_internal_fn.regionX = function (d) {
    var $$ = this,
        config = $$.config,
        xPos,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        xPos = config.axis_rotated ? 'start' in d ? yScale(d.start) : 0 : 0;
    } else {
        xPos = config.axis_rotated ? 0 : 'start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0;
    }
    return xPos;
};
c3_chart_internal_fn.regionY = function (d) {
    var $$ = this,
        config = $$.config,
        yPos,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        yPos = config.axis_rotated ? 0 : 'end' in d ? yScale(d.end) : 0;
    } else {
        yPos = config.axis_rotated ? 'start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0 : 0;
    }
    return yPos;
};
c3_chart_internal_fn.regionWidth = function (d) {
    var $$ = this,
        config = $$.config,
        start = $$.regionX(d),
        end,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        end = config.axis_rotated ? 'end' in d ? yScale(d.end) : $$.width : $$.width;
    } else {
        end = config.axis_rotated ? $$.width : 'end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.width;
    }
    return end < start ? 0 : end - start;
};
c3_chart_internal_fn.regionHeight = function (d) {
    var $$ = this,
        config = $$.config,
        start = this.regionY(d),
        end,
        yScale = d.axis === 'y' ? $$.y : $$.y2;
    if (d.axis === 'y' || d.axis === 'y2') {
        end = config.axis_rotated ? $$.height : 'start' in d ? yScale(d.start) : $$.height;
    } else {
        end = config.axis_rotated ? 'end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.height : $$.height;
    }
    return end < start ? 0 : end - start;
};
c3_chart_internal_fn.isRegionOnX = function (d) {
    return !d.axis || d.axis === 'x';
};

c3_chart_internal_fn.getScale = function (min, max, forTimeseries) {
    return (forTimeseries ? this.d3.time.scale() : this.d3.scale.linear()).range([min, max]);
};
c3_chart_internal_fn.getX = function (min, max, domain, offset) {
    var $$ = this,
        scale = $$.getScale(min, max, $$.isTimeSeries()),
        _scale = domain ? scale.domain(domain) : scale,
        key;
    // Define customized scale if categorized axis
    if ($$.isCategorized()) {
        offset = offset || function () {
            return 0;
        };
        scale = function scale(d, raw) {
            var v = _scale(d) + offset(d);
            return raw ? v : Math.ceil(v);
        };
    } else {
        scale = function scale(d, raw) {
            var v = _scale(d);
            return raw ? v : Math.ceil(v);
        };
    }
    // define functions
    for (key in _scale) {
        scale[key] = _scale[key];
    }
    scale.orgDomain = function () {
        return _scale.domain();
    };
    // define custom domain() for categorized axis
    if ($$.isCategorized()) {
        scale.domain = function (domain) {
            if (!arguments.length) {
                domain = this.orgDomain();
                return [domain[0], domain[1] + 1];
            }
            _scale.domain(domain);
            return scale;
        };
    }
    return scale;
};
c3_chart_internal_fn.getY = function (min, max, domain) {
    var scale = this.getScale(min, max, this.isTimeSeriesY());
    if (domain) {
        scale.domain(domain);
    }
    return scale;
};
c3_chart_internal_fn.getYScale = function (id) {
    return this.axis.getId(id) === 'y2' ? this.y2 : this.y;
};
c3_chart_internal_fn.getSubYScale = function (id) {
    return this.axis.getId(id) === 'y2' ? this.subY2 : this.subY;
};
c3_chart_internal_fn.updateScales = function () {
    var $$ = this,
        config = $$.config,
        forInit = !$$.x;
    // update edges
    $$.xMin = config.axis_rotated ? 1 : 0;
    $$.xMax = config.axis_rotated ? $$.height : $$.width;
    $$.yMin = config.axis_rotated ? 0 : $$.height;
    $$.yMax = config.axis_rotated ? $$.width : 1;
    $$.subXMin = $$.xMin;
    $$.subXMax = $$.xMax;
    $$.subYMin = config.axis_rotated ? 0 : $$.height2;
    $$.subYMax = config.axis_rotated ? $$.width2 : 1;
    // update scales
    $$.x = $$.getX($$.xMin, $$.xMax, forInit ? undefined : $$.x.orgDomain(), function () {
        return $$.xAxis.tickOffset();
    });
    $$.y = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y_default : $$.y.domain());
    $$.y2 = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y2_default : $$.y2.domain());
    $$.subX = $$.getX($$.xMin, $$.xMax, $$.orgXDomain, function (d) {
        return d % 1 ? 0 : $$.subXAxis.tickOffset();
    });
    $$.subY = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y_default : $$.subY.domain());
    $$.subY2 = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y2_default : $$.subY2.domain());
    // update axes
    $$.xAxisTickFormat = $$.axis.getXAxisTickFormat();
    $$.xAxisTickValues = $$.axis.getXAxisTickValues();
    $$.yAxisTickValues = $$.axis.getYAxisTickValues();
    $$.y2AxisTickValues = $$.axis.getY2AxisTickValues();

    $$.xAxis = $$.axis.getXAxis($$.x, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
    $$.subXAxis = $$.axis.getXAxis($$.subX, $$.subXOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
    $$.yAxis = $$.axis.getYAxis($$.y, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, config.axis_y_tick_outer);
    $$.y2Axis = $$.axis.getYAxis($$.y2, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, config.axis_y2_tick_outer);

    // Set initialized scales to brush and zoom
    if (!forInit) {
        if ($$.brush) {
            $$.brush.scale($$.subX);
        }
        if (config.zoom_enabled) {
            $$.zoom.scale($$.x);
        }
    }
    // update for arc
    if ($$.updateArc) {
        $$.updateArc();
    }
};

c3_chart_internal_fn.selectPoint = function (target, d, i) {
    var $$ = this,
        config = $$.config,
        cx = (config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
        cy = (config.axis_rotated ? $$.circleX : $$.circleY).bind($$),
        r = $$.pointSelectR.bind($$);
    config.data_onselected.call($$.api, d, target.node());
    // add selected-circle on low layer g
    $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i).data([d]).enter().append('circle').attr("class", function () {
        return $$.generateClass(CLASS.selectedCircle, i);
    }).attr("cx", cx).attr("cy", cy).attr("stroke", function () {
        return $$.color(d);
    }).attr("r", function (d) {
        return $$.pointSelectR(d) * 1.4;
    }).transition().duration(100).attr("r", r);
};
c3_chart_internal_fn.unselectPoint = function (target, d, i) {
    var $$ = this;
    $$.config.data_onunselected.call($$.api, d, target.node());
    // remove selected-circle from low layer g
    $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i).transition().duration(100).attr('r', 0).remove();
};
c3_chart_internal_fn.togglePoint = function (selected, target, d, i) {
    selected ? this.selectPoint(target, d, i) : this.unselectPoint(target, d, i);
};
c3_chart_internal_fn.selectPath = function (target, d) {
    var $$ = this;
    $$.config.data_onselected.call($$, d, target.node());
    if ($$.config.interaction_brighten) {
        target.transition().duration(100).style("fill", function () {
            return $$.d3.rgb($$.color(d)).brighter(0.75);
        });
    }
};
c3_chart_internal_fn.unselectPath = function (target, d) {
    var $$ = this;
    $$.config.data_onunselected.call($$, d, target.node());
    if ($$.config.interaction_brighten) {
        target.transition().duration(100).style("fill", function () {
            return $$.color(d);
        });
    }
};
c3_chart_internal_fn.togglePath = function (selected, target, d, i) {
    selected ? this.selectPath(target, d, i) : this.unselectPath(target, d, i);
};
c3_chart_internal_fn.getToggle = function (that, d) {
    var $$ = this,
        toggle;
    if (that.nodeName === 'circle') {
        if ($$.isStepType(d)) {
            // circle is hidden in step chart, so treat as within the click area
            toggle = function toggle() {}; // TODO: how to select step chart?
        } else {
            toggle = $$.togglePoint;
        }
    } else if (that.nodeName === 'path') {
        toggle = $$.togglePath;
    }
    return toggle;
};
c3_chart_internal_fn.toggleShape = function (that, d, i) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        shape = d3.select(that),
        isSelected = shape.classed(CLASS.SELECTED),
        toggle = $$.getToggle(that, d).bind($$);

    if (config.data_selection_enabled && config.data_selection_isselectable(d)) {
        if (!config.data_selection_multiple) {
            $$.main.selectAll('.' + CLASS.shapes + (config.data_selection_grouped ? $$.getTargetSelectorSuffix(d.id) : "")).selectAll('.' + CLASS.shape).each(function (d, i) {
                var shape = d3.select(this);
                if (shape.classed(CLASS.SELECTED)) {
                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
                }
            });
        }
        shape.classed(CLASS.SELECTED, !isSelected);
        toggle(!isSelected, shape, d, i);
    }
};

c3_chart_internal_fn.initBar = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartBars);
};
c3_chart_internal_fn.updateTargetsForBar = function (targets) {
    var $$ = this,
        config = $$.config,
        mainBarUpdate,
        mainBarEnter,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainBarUpdate = $$.main.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar).data(targets).attr('class', function (d) {
        return classChartBar(d) + classFocus(d);
    });
    mainBarEnter = mainBarUpdate.enter().append('g').attr('class', classChartBar).style("pointer-events", "none");
    // Bars for each data
    mainBarEnter.append('g').attr("class", classBars).style("cursor", function (d) {
        return config.data_selection_isselectable(d) ? "pointer" : null;
    });
};
c3_chart_internal_fn.updateBar = function (durationForExit) {
    var $$ = this,
        barData = $$.barData.bind($$),
        classBar = $$.classBar.bind($$),
        initialOpacity = $$.initialOpacity.bind($$),
        color = function color(d) {
        return $$.color(d.id);
    };
    $$.mainBar = $$.main.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar).data(barData);
    $$.mainBar.enter().append('path').attr("class", classBar).style("stroke", color).style("fill", color);
    $$.mainBar.style("opacity", initialOpacity);
    $$.mainBar.exit().transition().duration(durationForExit).remove();
};
c3_chart_internal_fn.redrawBar = function (drawBar, withTransition) {
    return [(withTransition ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr('d', drawBar).style("fill", this.color).style("opacity", 1)];
};
c3_chart_internal_fn.getBarW = function (axis, barTargetsNum) {
    var $$ = this,
        config = $$.config,
        w = typeof config.bar_width === 'number' ? config.bar_width : barTargetsNum ? axis.tickInterval() * config.bar_width_ratio / barTargetsNum : 0;
    return config.bar_width_max && w > config.bar_width_max ? config.bar_width_max : w;
};
c3_chart_internal_fn.getBars = function (i, id) {
    var $$ = this;
    return (id ? $$.main.selectAll('.' + CLASS.bars + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.bar + (isValue(i) ? '-' + i : ''));
};
c3_chart_internal_fn.expandBars = function (i, id, reset) {
    var $$ = this;
    if (reset) {
        $$.unexpandBars();
    }
    $$.getBars(i, id).classed(CLASS.EXPANDED, true);
};
c3_chart_internal_fn.unexpandBars = function (i) {
    var $$ = this;
    $$.getBars(i).classed(CLASS.EXPANDED, false);
};
c3_chart_internal_fn.generateDrawBar = function (barIndices, isSub) {
    var $$ = this,
        config = $$.config,
        getPoints = $$.generateGetBarPoints(barIndices, isSub);
    return function (d, i) {
        // 4 points that make a bar
        var points = getPoints(d, i);

        // switch points if axis is rotated, not applicable for sub chart
        var indexX = config.axis_rotated ? 1 : 0;
        var indexY = config.axis_rotated ? 0 : 1;

        var path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' + 'L' + points[1][indexX] + ',' + points[1][indexY] + ' ' + 'L' + points[2][indexX] + ',' + points[2][indexY] + ' ' + 'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' + 'z';

        return path;
    };
};
c3_chart_internal_fn.generateGetBarPoints = function (barIndices, isSub) {
    var $$ = this,
        axis = isSub ? $$.subXAxis : $$.xAxis,
        barTargetsNum = barIndices.__max__ + 1,
        barW = $$.getBarW(axis, barTargetsNum),
        barX = $$.getShapeX(barW, barTargetsNum, barIndices, !!isSub),
        barY = $$.getShapeY(!!isSub),
        barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = barOffset(d, i) || y0,
            // offset is for stacked bar chart
        posX = barX(d),
            posY = barY(d);
        // fix posY not to overflow opposite quadrant
        if ($$.config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 4 points that make a bar
        return [[posX, offset], [posX, posY - (y0 - offset)], [posX + barW, posY - (y0 - offset)], [posX + barW, offset]];
    };
};
c3_chart_internal_fn.isWithinBar = function (that) {
    var mouse = this.d3.mouse(that),
        box = that.getBoundingClientRect(),
        seg0 = that.pathSegList.getItem(0),
        seg1 = that.pathSegList.getItem(1),
        x = Math.min(seg0.x, seg1.x),
        y = Math.min(seg0.y, seg1.y),
        w = box.width,
        h = box.height,
        offset = 2,
        sx = x - offset,
        ex = x + w + offset,
        sy = y + h + offset,
        ey = y - offset;
    return sx < mouse[0] && mouse[0] < ex && ey < mouse[1] && mouse[1] < sy;
};

c3_chart_internal_fn.getShapeIndices = function (typeFilter) {
    var $$ = this,
        config = $$.config,
        indices = {},
        i = 0,
        j,
        k;
    $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
        for (j = 0; j < config.data_groups.length; j++) {
            if (config.data_groups[j].indexOf(d.id) < 0) {
                continue;
            }
            for (k = 0; k < config.data_groups[j].length; k++) {
                if (config.data_groups[j][k] in indices) {
                    indices[d.id] = indices[config.data_groups[j][k]];
                    break;
                }
            }
        }
        if (isUndefined(indices[d.id])) {
            indices[d.id] = i++;
        }
    });
    indices.__max__ = i - 1;
    return indices;
};
c3_chart_internal_fn.getShapeX = function (offset, targetsNum, indices, isSub) {
    var $$ = this,
        scale = isSub ? $$.subX : $$.x;
    return function (d) {
        var index = d.id in indices ? indices[d.id] : 0;
        return d.x || d.x === 0 ? scale(d.x) - offset * (targetsNum / 2 - index) : 0;
    };
};
c3_chart_internal_fn.getShapeY = function (isSub) {
    var $$ = this;
    return function (d) {
        var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id);
        return scale(d.value);
    };
};
c3_chart_internal_fn.getShapeOffset = function (typeFilter, indices, isSub) {
    var $$ = this,
        targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
        targetIds = targets.map(function (t) {
        return t.id;
    });
    return function (d, i) {
        var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
            y0 = scale(0),
            offset = y0;
        targets.forEach(function (t) {
            var values = $$.isStepType(d) ? $$.convertValuesToStep(t.values) : t.values;
            if (t.id === d.id || indices[t.id] !== indices[d.id]) {
                return;
            }
            if (targetIds.indexOf(t.id) < targetIds.indexOf(d.id)) {
                // check if the x values line up
                if (typeof values[i] === 'undefined' || +values[i].x !== +d.x) {
                    // "+" for timeseries
                    // if not, try to find the value that does line up
                    i = -1;
                    values.forEach(function (v, j) {
                        if (v.x === d.x) {
                            i = j;
                        }
                    });
                }
                if (i in values && values[i].value * d.value >= 0) {
                    offset += scale(values[i].value) - y0;
                }
            }
        });
        return offset;
    };
};
c3_chart_internal_fn.isWithinShape = function (that, d) {
    var $$ = this,
        shape = $$.d3.select(that),
        isWithin;
    if (!$$.isTargetToShow(d.id)) {
        isWithin = false;
    } else if (that.nodeName === 'circle') {
        isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.pointSelectR(d) * 1.5);
    } else if (that.nodeName === 'path') {
        isWithin = shape.classed(CLASS.bar) ? $$.isWithinBar(that) : true;
    }
    return isWithin;
};

c3_chart_internal_fn.getInterpolate = function (d) {
    var $$ = this,
        interpolation = $$.isInterpolationType($$.config.spline_interpolation_type) ? $$.config.spline_interpolation_type : 'cardinal';
    return $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? $$.config.line_step_type : "linear";
};

c3_chart_internal_fn.initLine = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartLines);
};
c3_chart_internal_fn.updateTargetsForLine = function (targets) {
    var $$ = this,
        config = $$.config,
        mainLineUpdate,
        mainLineEnter,
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classAreas = $$.classAreas.bind($$),
        classCircles = $$.classCircles.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainLineUpdate = $$.main.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine).data(targets).attr('class', function (d) {
        return classChartLine(d) + classFocus(d);
    });
    mainLineEnter = mainLineUpdate.enter().append('g').attr('class', classChartLine).style('opacity', 0).style("pointer-events", "none");
    // Lines for each data
    mainLineEnter.append('g').attr("class", classLines);
    // Areas
    mainLineEnter.append('g').attr('class', classAreas);
    // Circles for each data point on lines
    mainLineEnter.append('g').attr("class", function (d) {
        return $$.generateClass(CLASS.selectedCircles, d.id);
    });
    mainLineEnter.append('g').attr("class", classCircles).style("cursor", function (d) {
        return config.data_selection_isselectable(d) ? "pointer" : null;
    });
    // Update date for selected circles
    targets.forEach(function (t) {
        $$.main.selectAll('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll('.' + CLASS.selectedCircle).each(function (d) {
            d.value = t.values[d.index].value;
        });
    });
    // MEMO: can not keep same color...
    //mainLineUpdate.exit().remove();
};
c3_chart_internal_fn.updateLine = function (durationForExit) {
    var $$ = this;
    $$.mainLine = $$.main.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line).data($$.lineData.bind($$));
    $$.mainLine.enter().append('path').attr('class', $$.classLine.bind($$)).style("stroke", $$.color);
    $$.mainLine.style("opacity", $$.initialOpacity.bind($$)).style('shape-rendering', function (d) {
        return $$.isStepType(d) ? 'crispEdges' : '';
    }).attr('transform', null);
    $$.mainLine.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawLine = function (drawLine, withTransition) {
    return [(withTransition ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", drawLine).style("stroke", this.color).style("opacity", 1)];
};
c3_chart_internal_fn.generateDrawLine = function (lineIndices, isSub) {
    var $$ = this,
        config = $$.config,
        line = $$.d3.svg.line(),
        getPoints = $$.generateGetLinePoints(lineIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function xValue(d) {
        return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        yValue = function yValue(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(d.value);
    };

    line = config.axis_rotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue);
    if (!config.line_connectNull) {
        line = line.defined(function (d) {
            return d.value != null;
        });
    }
    return function (d) {
        var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
            x = isSub ? $$.x : $$.subX,
            y = yScaleGetter.call($$, d.id),
            x0 = 0,
            y0 = 0,
            path;
        if ($$.isLineType(d)) {
            if (config.data_regions[d.id]) {
                path = $$.lineWithRegions(values, x, y, config.data_regions[d.id]);
            } else {
                if ($$.isStepType(d)) {
                    values = $$.convertValuesToStep(values);
                }
                path = line.interpolate($$.getInterpolate(d))(values);
            }
        } else {
            if (values[0]) {
                x0 = x(values[0].x);
                y0 = y(values[0].value);
            }
            path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
        }
        return path ? path : "M 0 0";
    };
};
c3_chart_internal_fn.generateGetLinePoints = function (lineIndices, isSub) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        lineTargetsNum = lineIndices.__max__ + 1,
        x = $$.getShapeX(0, lineTargetsNum, lineIndices, !!isSub),
        y = $$.getShapeY(!!isSub),
        lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = lineOffset(d, i) || y0,
            // offset is for stacked area chart
        posX = x(d),
            posY = y(d);
        // fix posY not to overflow opposite quadrant
        if (config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 1 point that marks the line position
        return [[posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, posY - (y0 - offset)] // needed for compatibility
        ];
    };
};

c3_chart_internal_fn.lineWithRegions = function (d, x, y, _regions) {
    var $$ = this,
        config = $$.config,
        prev = -1,
        i,
        j,
        s = "M",
        sWithRegion,
        xp,
        yp,
        dx,
        dy,
        dd,
        diff,
        diffx2,
        xOffset = $$.isCategorized() ? 0.5 : 0,
        xValue,
        yValue,
        regions = [];

    function isWithinRegions(x, regions) {
        var i;
        for (i = 0; i < regions.length; i++) {
            if (regions[i].start < x && x <= regions[i].end) {
                return true;
            }
        }
        return false;
    }

    // Check start/end of regions
    if (isDefined(_regions)) {
        for (i = 0; i < _regions.length; i++) {
            regions[i] = {};
            if (isUndefined(_regions[i].start)) {
                regions[i].start = d[0].x;
            } else {
                regions[i].start = $$.isTimeSeries() ? $$.parseDate(_regions[i].start) : _regions[i].start;
            }
            if (isUndefined(_regions[i].end)) {
                regions[i].end = d[d.length - 1].x;
            } else {
                regions[i].end = $$.isTimeSeries() ? $$.parseDate(_regions[i].end) : _regions[i].end;
            }
        }
    }

    // Set scales
    xValue = config.axis_rotated ? function (d) {
        return y(d.value);
    } : function (d) {
        return x(d.x);
    };
    yValue = config.axis_rotated ? function (d) {
        return x(d.x);
    } : function (d) {
        return y(d.value);
    };

    // Define svg generator function for region
    function generateM(points) {
        return 'M' + points[0][0] + ' ' + points[0][1] + ' ' + points[1][0] + ' ' + points[1][1];
    }
    if ($$.isTimeSeries()) {
        sWithRegion = function sWithRegion(d0, d1, j, diff) {
            var x0 = d0.x.getTime(),
                x_diff = d1.x - d0.x,
                xv0 = new Date(x0 + x_diff * j),
                xv1 = new Date(x0 + x_diff * (j + diff)),
                points;
            if (config.axis_rotated) {
                points = [[y(yp(j)), x(xv0)], [y(yp(j + diff)), x(xv1)]];
            } else {
                points = [[x(xv0), y(yp(j))], [x(xv1), y(yp(j + diff))]];
            }
            return generateM(points);
        };
    } else {
        sWithRegion = function sWithRegion(d0, d1, j, diff) {
            var points;
            if (config.axis_rotated) {
                points = [[y(yp(j), true), x(xp(j))], [y(yp(j + diff), true), x(xp(j + diff))]];
            } else {
                points = [[x(xp(j), true), y(yp(j))], [x(xp(j + diff), true), y(yp(j + diff))]];
            }
            return generateM(points);
        };
    }

    // Generate
    for (i = 0; i < d.length; i++) {

        // Draw as normal
        if (isUndefined(regions) || !isWithinRegions(d[i].x, regions)) {
            s += " " + xValue(d[i]) + " " + yValue(d[i]);
        }
        // Draw with region // TODO: Fix for horizotal charts
        else {
                xp = $$.getScale(d[i - 1].x + xOffset, d[i].x + xOffset, $$.isTimeSeries());
                yp = $$.getScale(d[i - 1].value, d[i].value);

                dx = x(d[i].x) - x(d[i - 1].x);
                dy = y(d[i].value) - y(d[i - 1].value);
                dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                diff = 2 / dd;
                diffx2 = diff * 2;

                for (j = diff; j <= 1; j += diffx2) {
                    s += sWithRegion(d[i - 1], d[i], j, diff);
                }
            }
        prev = d[i].x;
    }

    return s;
};

c3_chart_internal_fn.updateArea = function (durationForExit) {
    var $$ = this,
        d3 = $$.d3;
    $$.mainArea = $$.main.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area).data($$.lineData.bind($$));
    $$.mainArea.enter().append('path').attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
        $$.orgAreaOpacity = +d3.select(this).style('opacity');return 0;
    });
    $$.mainArea.style("opacity", $$.orgAreaOpacity);
    $$.mainArea.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawArea = function (drawArea, withTransition) {
    return [(withTransition ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", drawArea).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
};
c3_chart_internal_fn.generateDrawArea = function (areaIndices, isSub) {
    var $$ = this,
        config = $$.config,
        area = $$.d3.svg.area(),
        getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
        yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
        xValue = function xValue(d) {
        return (isSub ? $$.subxx : $$.xx).call($$, d);
    },
        value0 = function value0(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.getAreaBaseValue(d.id));
    },
        value1 = function value1(d, i) {
        return config.data_groups.length > 0 ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)(d.value);
    };

    area = config.axis_rotated ? area.x0(value0).x1(value1).y(xValue) : area.x(xValue).y0(config.area_above ? 0 : value0).y1(value1);
    if (!config.line_connectNull) {
        area = area.defined(function (d) {
            return d.value !== null;
        });
    }

    return function (d) {
        var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
            x0 = 0,
            y0 = 0,
            path;
        if ($$.isAreaType(d)) {
            if ($$.isStepType(d)) {
                values = $$.convertValuesToStep(values);
            }
            path = area.interpolate($$.getInterpolate(d))(values);
        } else {
            if (values[0]) {
                x0 = $$.x(values[0].x);
                y0 = $$.getYScale(d.id)(values[0].value);
            }
            path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
        }
        return path ? path : "M 0 0";
    };
};
c3_chart_internal_fn.getAreaBaseValue = function () {
    return 0;
};
c3_chart_internal_fn.generateGetAreaPoints = function (areaIndices, isSub) {
    // partial duplication of generateGetBarPoints
    var $$ = this,
        config = $$.config,
        areaTargetsNum = areaIndices.__max__ + 1,
        x = $$.getShapeX(0, areaTargetsNum, areaIndices, !!isSub),
        y = $$.getShapeY(!!isSub),
        areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
        yScale = isSub ? $$.getSubYScale : $$.getYScale;
    return function (d, i) {
        var y0 = yScale.call($$, d.id)(0),
            offset = areaOffset(d, i) || y0,
            // offset is for stacked area chart
        posX = x(d),
            posY = y(d);
        // fix posY not to overflow opposite quadrant
        if (config.axis_rotated) {
            if (0 < d.value && posY < y0 || d.value < 0 && y0 < posY) {
                posY = y0;
            }
        }
        // 1 point that marks the area position
        return [[posX, offset], [posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
        [posX, offset] // needed for compatibility
        ];
    };
};

c3_chart_internal_fn.updateCircle = function () {
    var $$ = this;
    $$.mainCircle = $$.main.selectAll('.' + CLASS.circles).selectAll('.' + CLASS.circle).data($$.lineOrScatterData.bind($$));
    $$.mainCircle.enter().append("circle").attr("class", $$.classCircle.bind($$)).attr("r", $$.pointR.bind($$)).style("fill", $$.color);
    $$.mainCircle.style("opacity", $$.initialOpacityForCircle.bind($$));
    $$.mainCircle.exit().remove();
};
c3_chart_internal_fn.redrawCircle = function (cx, cy, withTransition) {
    var selectedCircles = this.main.selectAll('.' + CLASS.selectedCircle);
    return [(withTransition ? this.mainCircle.transition(Math.random().toString()) : this.mainCircle).style('opacity', this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", cx).attr("cy", cy), (withTransition ? selectedCircles.transition(Math.random().toString()) : selectedCircles).attr("cx", cx).attr("cy", cy)];
};
c3_chart_internal_fn.circleX = function (d) {
    return d.x || d.x === 0 ? this.x(d.x) : null;
};
c3_chart_internal_fn.updateCircleY = function () {
    var $$ = this,
        lineIndices,
        getPoints;
    if ($$.config.data_groups.length > 0) {
        lineIndices = $$.getShapeIndices($$.isLineType), getPoints = $$.generateGetLinePoints(lineIndices);
        $$.circleY = function (d, i) {
            return getPoints(d, i)[0][1];
        };
    } else {
        $$.circleY = function (d) {
            return $$.getYScale(d.id)(d.value);
        };
    }
};
c3_chart_internal_fn.getCircles = function (i, id) {
    var $$ = this;
    return (id ? $$.main.selectAll('.' + CLASS.circles + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.circle + (isValue(i) ? '-' + i : ''));
};
c3_chart_internal_fn.expandCircles = function (i, id, reset) {
    var $$ = this,
        r = $$.pointExpandedR.bind($$);
    if (reset) {
        $$.unexpandCircles();
    }
    $$.getCircles(i, id).classed(CLASS.EXPANDED, true).attr('r', r);
};
c3_chart_internal_fn.unexpandCircles = function (i) {
    var $$ = this,
        r = $$.pointR.bind($$);
    $$.getCircles(i).filter(function () {
        return $$.d3.select(this).classed(CLASS.EXPANDED);
    }).classed(CLASS.EXPANDED, false).attr('r', r);
};
c3_chart_internal_fn.pointR = function (d) {
    var $$ = this,
        config = $$.config;
    return $$.isStepType(d) ? 0 : isFunction(config.point_r) ? config.point_r(d) : config.point_r;
};
c3_chart_internal_fn.pointExpandedR = function (d) {
    var $$ = this,
        config = $$.config;
    return config.point_focus_expand_enabled ? config.point_focus_expand_r ? config.point_focus_expand_r : $$.pointR(d) * 1.75 : $$.pointR(d);
};
c3_chart_internal_fn.pointSelectR = function (d) {
    var $$ = this,
        config = $$.config;
    return isFunction(config.point_select_r) ? config.point_select_r(d) : config.point_select_r ? config.point_select_r : $$.pointR(d) * 4;
};
c3_chart_internal_fn.isWithinCircle = function (that, r) {
    var d3 = this.d3,
        mouse = d3.mouse(that),
        d3_this = d3.select(that),
        cx = +d3_this.attr("cx"),
        cy = +d3_this.attr("cy");
    return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < r;
};
c3_chart_internal_fn.isWithinStep = function (that, y) {
    return Math.abs(y - this.d3.mouse(that)[1]) < 30;
};

c3_chart_internal_fn.getCurrentWidth = function () {
    var $$ = this,
        config = $$.config;
    return config.size_width ? config.size_width : $$.getParentWidth();
};
c3_chart_internal_fn.getCurrentHeight = function () {
    var $$ = this,
        config = $$.config,
        h = config.size_height ? config.size_height : $$.getParentHeight();
    return h > 0 ? h : 320 / ($$.hasType('gauge') && !config.gauge_fullCircle ? 2 : 1);
};
c3_chart_internal_fn.getCurrentPaddingTop = function () {
    var $$ = this,
        config = $$.config,
        padding = isValue(config.padding_top) ? config.padding_top : 0;
    if ($$.title && $$.title.node()) {
        padding += $$.getTitlePadding();
    }
    return padding;
};
c3_chart_internal_fn.getCurrentPaddingBottom = function () {
    var config = this.config;
    return isValue(config.padding_bottom) ? config.padding_bottom : 0;
};
c3_chart_internal_fn.getCurrentPaddingLeft = function (withoutRecompute) {
    var $$ = this,
        config = $$.config;
    if (isValue(config.padding_left)) {
        return config.padding_left;
    } else if (config.axis_rotated) {
        return !config.axis_x_show ? 1 : Math.max(ceil10($$.getAxisWidthByAxisId('x', withoutRecompute)), 40);
    } else if (!config.axis_y_show || config.axis_y_inner) {
        // && !config.axis_rotated
        return $$.axis.getYAxisLabelPosition().isOuter ? 30 : 1;
    } else {
        return ceil10($$.getAxisWidthByAxisId('y', withoutRecompute));
    }
};
c3_chart_internal_fn.getCurrentPaddingRight = function () {
    var $$ = this,
        config = $$.config,
        defaultPadding = 10,
        legendWidthOnRight = $$.isLegendRight ? $$.getLegendWidth() + 20 : 0;
    if (isValue(config.padding_right)) {
        return config.padding_right + 1; // 1 is needed not to hide tick line
    } else if (config.axis_rotated) {
        return defaultPadding + legendWidthOnRight;
    } else if (!config.axis_y2_show || config.axis_y2_inner) {
        // && !config.axis_rotated
        return 2 + legendWidthOnRight + ($$.axis.getY2AxisLabelPosition().isOuter ? 20 : 0);
    } else {
        return ceil10($$.getAxisWidthByAxisId('y2')) + legendWidthOnRight;
    }
};

c3_chart_internal_fn.getParentRectValue = function (key) {
    var parent = this.selectChart.node(),
        v;
    while (parent && parent.tagName !== 'BODY') {
        try {
            v = parent.getBoundingClientRect()[key];
        } catch (e) {
            if (key === 'width') {
                // In IE in certain cases getBoundingClientRect
                // will cause an "unspecified error"
                v = parent.offsetWidth;
            }
        }
        if (v) {
            break;
        }
        parent = parent.parentNode;
    }
    return v;
};
c3_chart_internal_fn.getParentWidth = function () {
    return this.getParentRectValue('width');
};
c3_chart_internal_fn.getParentHeight = function () {
    var h = this.selectChart.style('height');
    return h.indexOf('px') > 0 ? +h.replace('px', '') : 0;
};

c3_chart_internal_fn.getSvgLeft = function (withoutRecompute) {
    var $$ = this,
        config = $$.config,
        hasLeftAxisRect = config.axis_rotated || !config.axis_rotated && !config.axis_y_inner,
        leftAxisClass = config.axis_rotated ? CLASS.axisX : CLASS.axisY,
        leftAxis = $$.main.select('.' + leftAxisClass).node(),
        svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : { right: 0 },
        chartRect = $$.selectChart.node().getBoundingClientRect(),
        hasArc = $$.hasArcType(),
        svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
    return svgLeft > 0 ? svgLeft : 0;
};

c3_chart_internal_fn.getAxisWidthByAxisId = function (id, withoutRecompute) {
    var $$ = this,
        position = $$.axis.getLabelPositionById(id);
    return $$.axis.getMaxTickWidth(id, withoutRecompute) + (position.isInner ? 20 : 40);
};
c3_chart_internal_fn.getHorizontalAxisHeight = function (axisId) {
    var $$ = this,
        config = $$.config,
        h = 30;
    if (axisId === 'x' && !config.axis_x_show) {
        return 8;
    }
    if (axisId === 'x' && config.axis_x_height) {
        return config.axis_x_height;
    }
    if (axisId === 'y' && !config.axis_y_show) {
        return config.legend_show && !$$.isLegendRight && !$$.isLegendInset ? 10 : 1;
    }
    if (axisId === 'y2' && !config.axis_y2_show) {
        return $$.rotated_padding_top;
    }
    // Calculate x axis height when tick rotated
    if (axisId === 'x' && !config.axis_rotated && config.axis_x_tick_rotate) {
        h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_x_tick_rotate) / 180);
    }
    // Calculate y axis height when tick rotated
    if (axisId === 'y' && config.axis_rotated && config.axis_y_tick_rotate) {
        h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_y_tick_rotate) / 180);
    }
    return h + ($$.axis.getLabelPositionById(axisId).isInner ? 0 : 10) + (axisId === 'y2' ? -10 : 0);
};

c3_chart_internal_fn.getEventRectWidth = function () {
    return Math.max(0, this.xAxis.tickInterval());
};

c3_chart_internal_fn.initBrush = function () {
    var $$ = this,
        d3 = $$.d3;
    $$.brush = d3.svg.brush().on("brush", function () {
        $$.redrawForBrush();
    });
    $$.brush.update = function () {
        if ($$.context) {
            $$.context.select('.' + CLASS.brush).call(this);
        }
        return this;
    };
    $$.brush.scale = function (scale) {
        return $$.config.axis_rotated ? this.y(scale) : this.x(scale);
    };
};
c3_chart_internal_fn.initSubchart = function () {
    var $$ = this,
        config = $$.config,
        context = $$.context = $$.svg.append("g").attr("transform", $$.getTranslate('context')),
        visibility = config.subchart_show ? 'visible' : 'hidden';

    context.style('visibility', visibility);

    // Define g for chart area
    context.append('g').attr("clip-path", $$.clipPathForSubchart).attr('class', CLASS.chart);

    // Define g for bar chart area
    context.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartBars);

    // Define g for line chart area
    context.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartLines);

    // Add extent rect for Brush
    context.append("g").attr("clip-path", $$.clipPath).attr("class", CLASS.brush).call($$.brush);

    // ATTENTION: This must be called AFTER chart added
    // Add Axis
    $$.axes.subx = context.append("g").attr("class", CLASS.axisX).attr("transform", $$.getTranslate('subx')).attr("clip-path", config.axis_rotated ? "" : $$.clipPathForXAxis).style("visibility", config.subchart_axis_x_show ? visibility : 'hidden');
};
c3_chart_internal_fn.updateTargetsForSubchart = function (targets) {
    var $$ = this,
        context = $$.context,
        config = $$.config,
        contextLineEnter,
        contextLineUpdate,
        contextBarEnter,
        contextBarUpdate,
        classChartBar = $$.classChartBar.bind($$),
        classBars = $$.classBars.bind($$),
        classChartLine = $$.classChartLine.bind($$),
        classLines = $$.classLines.bind($$),
        classAreas = $$.classAreas.bind($$);

    if (config.subchart_show) {
        //-- Bar --//
        contextBarUpdate = context.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar).data(targets).attr('class', classChartBar);
        contextBarEnter = contextBarUpdate.enter().append('g').style('opacity', 0).attr('class', classChartBar);
        // Bars for each data
        contextBarEnter.append('g').attr("class", classBars);

        //-- Line --//
        contextLineUpdate = context.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine).data(targets).attr('class', classChartLine);
        contextLineEnter = contextLineUpdate.enter().append('g').style('opacity', 0).attr('class', classChartLine);
        // Lines for each data
        contextLineEnter.append("g").attr("class", classLines);
        // Area
        contextLineEnter.append("g").attr("class", classAreas);

        //-- Brush --//
        context.selectAll('.' + CLASS.brush + ' rect').attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? $$.width2 : $$.height2);
    }
};
c3_chart_internal_fn.updateBarForSubchart = function (durationForExit) {
    var $$ = this;
    $$.contextBar = $$.context.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar).data($$.barData.bind($$));
    $$.contextBar.enter().append('path').attr("class", $$.classBar.bind($$)).style("stroke", 'none').style("fill", $$.color);
    $$.contextBar.style("opacity", $$.initialOpacity.bind($$));
    $$.contextBar.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawBarForSubchart = function (drawBarOnSub, withTransition, duration) {
    (withTransition ? this.contextBar.transition(Math.random().toString()).duration(duration) : this.contextBar).attr('d', drawBarOnSub).style('opacity', 1);
};
c3_chart_internal_fn.updateLineForSubchart = function (durationForExit) {
    var $$ = this;
    $$.contextLine = $$.context.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line).data($$.lineData.bind($$));
    $$.contextLine.enter().append('path').attr('class', $$.classLine.bind($$)).style('stroke', $$.color);
    $$.contextLine.style("opacity", $$.initialOpacity.bind($$));
    $$.contextLine.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawLineForSubchart = function (drawLineOnSub, withTransition, duration) {
    (withTransition ? this.contextLine.transition(Math.random().toString()).duration(duration) : this.contextLine).attr("d", drawLineOnSub).style('opacity', 1);
};
c3_chart_internal_fn.updateAreaForSubchart = function (durationForExit) {
    var $$ = this,
        d3 = $$.d3;
    $$.contextArea = $$.context.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area).data($$.lineData.bind($$));
    $$.contextArea.enter().append('path').attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
        $$.orgAreaOpacity = +d3.select(this).style('opacity');return 0;
    });
    $$.contextArea.style("opacity", 0);
    $$.contextArea.exit().transition().duration(durationForExit).style('opacity', 0).remove();
};
c3_chart_internal_fn.redrawAreaForSubchart = function (drawAreaOnSub, withTransition, duration) {
    (withTransition ? this.contextArea.transition(Math.random().toString()).duration(duration) : this.contextArea).attr("d", drawAreaOnSub).style("fill", this.color).style("opacity", this.orgAreaOpacity);
};
c3_chart_internal_fn.redrawSubchart = function (withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices) {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        drawAreaOnSub,
        drawBarOnSub,
        drawLineOnSub;

    $$.context.style('visibility', config.subchart_show ? 'visible' : 'hidden');

    // subchart
    if (config.subchart_show) {
        // reflect main chart to extent on subchart if zoomed
        if (d3.event && d3.event.type === 'zoom') {
            $$.brush.extent($$.x.orgDomain()).update();
        }
        // update subchart elements if needed
        if (withSubchart) {

            // extent rect
            if (!$$.brush.empty()) {
                $$.brush.extent($$.x.orgDomain()).update();
            }
            // setup drawer - MEMO: this must be called after axis updated
            drawAreaOnSub = $$.generateDrawArea(areaIndices, true);
            drawBarOnSub = $$.generateDrawBar(barIndices, true);
            drawLineOnSub = $$.generateDrawLine(lineIndices, true);

            $$.updateBarForSubchart(duration);
            $$.updateLineForSubchart(duration);
            $$.updateAreaForSubchart(duration);

            $$.redrawBarForSubchart(drawBarOnSub, duration, duration);
            $$.redrawLineForSubchart(drawLineOnSub, duration, duration);
            $$.redrawAreaForSubchart(drawAreaOnSub, duration, duration);
        }
    }
};
c3_chart_internal_fn.redrawForBrush = function () {
    var $$ = this,
        x = $$.x;
    $$.redraw({
        withTransition: false,
        withY: $$.config.zoom_rescale,
        withSubchart: false,
        withUpdateXDomain: true,
        withDimension: false
    });
    $$.config.subchart_onbrush.call($$.api, x.orgDomain());
};
c3_chart_internal_fn.transformContext = function (withTransition, transitions) {
    var $$ = this,
        subXAxis;
    if (transitions && transitions.axisSubX) {
        subXAxis = transitions.axisSubX;
    } else {
        subXAxis = $$.context.select('.' + CLASS.axisX);
        if (withTransition) {
            subXAxis = subXAxis.transition();
        }
    }
    $$.context.attr("transform", $$.getTranslate('context'));
    subXAxis.attr("transform", $$.getTranslate('subx'));
};
c3_chart_internal_fn.getDefaultExtent = function () {
    var $$ = this,
        config = $$.config,
        extent = isFunction(config.axis_x_extent) ? config.axis_x_extent($$.getXDomain($$.data.targets)) : config.axis_x_extent;
    if ($$.isTimeSeries()) {
        extent = [$$.parseDate(extent[0]), $$.parseDate(extent[1])];
    }
    return extent;
};

c3_chart_internal_fn.initText = function () {
    var $$ = this;
    $$.main.select('.' + CLASS.chart).append("g").attr("class", CLASS.chartTexts);
    $$.mainText = $$.d3.selectAll([]);
};
c3_chart_internal_fn.updateTargetsForText = function (targets) {
    var $$ = this,
        mainTextUpdate,
        mainTextEnter,
        classChartText = $$.classChartText.bind($$),
        classTexts = $$.classTexts.bind($$),
        classFocus = $$.classFocus.bind($$);
    mainTextUpdate = $$.main.select('.' + CLASS.chartTexts).selectAll('.' + CLASS.chartText).data(targets).attr('class', function (d) {
        return classChartText(d) + classFocus(d);
    });
    mainTextEnter = mainTextUpdate.enter().append('g').attr('class', classChartText).style('opacity', 0).style("pointer-events", "none");
    mainTextEnter.append('g').attr('class', classTexts);
};
c3_chart_internal_fn.updateText = function (durationForExit) {
    var $$ = this,
        config = $$.config,
        barOrLineData = $$.barOrLineData.bind($$),
        classText = $$.classText.bind($$);
    $$.mainText = $$.main.selectAll('.' + CLASS.texts).selectAll('.' + CLASS.text).data(barOrLineData);
    $$.mainText.enter().append('text').attr("class", classText).attr('text-anchor', function (d) {
        return config.axis_rotated ? d.value < 0 ? 'end' : 'start' : 'middle';
    }).style("stroke", 'none').style("fill", function (d) {
        return $$.color(d);
    }).style("fill-opacity", 0);
    $$.mainText.text(function (d, i, j) {
        return $$.dataLabelFormat(d.id)(d.value, d.id, i, j);
    });
    $$.mainText.exit().transition().duration(durationForExit).style('fill-opacity', 0).remove();
};
c3_chart_internal_fn.redrawText = function (xForText, yForText, forFlow, withTransition) {
    return [(withTransition ? this.mainText.transition() : this.mainText).attr('x', xForText).attr('y', yForText).style("fill", this.color).style("fill-opacity", forFlow ? 0 : this.opacityForText.bind(this))];
};
c3_chart_internal_fn.getTextRect = function (text, cls, element) {
    var dummy = this.d3.select('body').append('div').classed('c3', true),
        svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0),
        font = this.d3.select(element).style('font'),
        rect;
    svg.selectAll('.dummy').data([text]).enter().append('text').classed(cls ? cls : "", true).style('font', font).text(text).each(function () {
        rect = this.getBoundingClientRect();
    });
    dummy.remove();
    return rect;
};
c3_chart_internal_fn.generateXYForText = function (areaIndices, barIndices, lineIndices, forX) {
    var $$ = this,
        getAreaPoints = $$.generateGetAreaPoints(areaIndices, false),
        getBarPoints = $$.generateGetBarPoints(barIndices, false),
        getLinePoints = $$.generateGetLinePoints(lineIndices, false),
        getter = forX ? $$.getXForText : $$.getYForText;
    return function (d, i) {
        var getPoints = $$.isAreaType(d) ? getAreaPoints : $$.isBarType(d) ? getBarPoints : getLinePoints;
        return getter.call($$, getPoints(d, i), d, this);
    };
};
c3_chart_internal_fn.getXForText = function (points, d, textElement) {
    var $$ = this,
        box = textElement.getBoundingClientRect(),
        xPos,
        padding;
    if ($$.config.axis_rotated) {
        padding = $$.isBarType(d) ? 4 : 6;
        xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1);
    } else {
        xPos = $$.hasType('bar') ? (points[2][0] + points[0][0]) / 2 : points[0][0];
    }
    // show labels regardless of the domain if value is null
    if (d.value === null) {
        if (xPos > $$.width) {
            xPos = $$.width - box.width;
        } else if (xPos < 0) {
            xPos = 4;
        }
    }
    return xPos;
};
c3_chart_internal_fn.getYForText = function (points, d, textElement) {
    var $$ = this,
        box = textElement.getBoundingClientRect(),
        yPos;
    if ($$.config.axis_rotated) {
        yPos = (points[0][0] + points[2][0] + box.height * 0.6) / 2;
    } else {
        yPos = points[2][1];
        if (d.value < 0 || d.value === 0 && !$$.hasPositiveValue) {
            yPos += box.height;
            if ($$.isBarType(d) && $$.isSafari()) {
                yPos -= 3;
            } else if (!$$.isBarType(d) && $$.isChrome()) {
                yPos += 3;
            }
        } else {
            yPos += $$.isBarType(d) ? -3 : -6;
        }
    }
    // show labels regardless of the domain if value is null
    if (d.value === null && !$$.config.axis_rotated) {
        if (yPos < box.height) {
            yPos = box.height;
        } else if (yPos > this.height) {
            yPos = this.height - 4;
        }
    }
    return yPos;
};

c3_chart_internal_fn.initTitle = function () {
    var $$ = this;
    $$.title = $$.svg.append("text").text($$.config.title_text).attr("class", $$.CLASS.title);
};
c3_chart_internal_fn.redrawTitle = function () {
    var $$ = this;
    $$.title.attr("x", $$.xForTitle.bind($$)).attr("y", $$.yForTitle.bind($$));
};
c3_chart_internal_fn.xForTitle = function () {
    var $$ = this,
        config = $$.config,
        position = config.title_position || 'left',
        x;
    if (position.indexOf('right') >= 0) {
        x = $$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width - config.title_padding.right;
    } else if (position.indexOf('center') >= 0) {
        x = ($$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width) / 2;
    } else {
        // left
        x = config.title_padding.left;
    }
    return x;
};
c3_chart_internal_fn.yForTitle = function () {
    var $$ = this;
    return $$.config.title_padding.top + $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).height;
};
c3_chart_internal_fn.getTitlePadding = function () {
    var $$ = this;
    return $$.yForTitle() + $$.config.title_padding.bottom;
};

c3_chart_internal_fn.initTooltip = function () {
    var $$ = this,
        config = $$.config,
        i;
    $$.tooltip = $$.selectChart.style("position", "relative").append("div").attr('class', CLASS.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none");
    // Show tooltip if needed
    if (config.tooltip_init_show) {
        if ($$.isTimeSeries() && isString(config.tooltip_init_x)) {
            config.tooltip_init_x = $$.parseDate(config.tooltip_init_x);
            for (i = 0; i < $$.data.targets[0].values.length; i++) {
                if ($$.data.targets[0].values[i].x - config.tooltip_init_x === 0) {
                    break;
                }
            }
            config.tooltip_init_x = i;
        }
        $$.tooltip.html(config.tooltip_contents.call($$, $$.data.targets.map(function (d) {
            return $$.addName(d.values[config.tooltip_init_x]);
        }), $$.axis.getXAxisTickFormat(), $$.getYFormat($$.hasArcType()), $$.color));
        $$.tooltip.style("top", config.tooltip_init_position.top).style("left", config.tooltip_init_position.left).style("display", "block");
    }
};
c3_chart_internal_fn.getTooltipSortFunction = function () {
    var $$ = this,
        config = $$.config;

    if (config.data_groups.length === 0 || config.tooltip_order !== undefined) {
        // if data are not grouped or if an order is specified
        // for the tooltip values we sort them by their values

        var order = config.tooltip_order;
        if (order === undefined) {
            order = config.data_order;
        }

        var valueOf = function valueOf(obj) {
            return obj ? obj.value : null;
        };

        // if data are not grouped, we sort them by their value
        if (isString(order) && order.toLowerCase() === 'asc') {
            return function (a, b) {
                return valueOf(a) - valueOf(b);
            };
        } else if (isString(order) && order.toLowerCase() === 'desc') {
            return function (a, b) {
                return valueOf(b) - valueOf(a);
            };
        } else if (isFunction(order)) {

            // if the function is from data_order we need
            // to wrap the returned function in order to format
            // the sorted value to the expected format

            var sortFunction = order;

            if (config.tooltip_order === undefined) {
                sortFunction = function sortFunction(a, b) {
                    return order(a ? {
                        id: a.id,
                        values: [a]
                    } : null, b ? {
                        id: b.id,
                        values: [b]
                    } : null);
                };
            }

            return sortFunction;
        } else if (isArray(order)) {
            return function (a, b) {
                return order.indexOf(a.id) - order.indexOf(b.id);
            };
        }
    } else {
        // if data are grouped, we follow the order of grouped targets
        var ids = $$.orderTargets($$.data.targets).map(function (i) {
            return i.id;
        });

        // if it was either asc or desc we need to invert the order
        // returned by orderTargets
        if ($$.isOrderAsc() || $$.isOrderDesc()) {
            ids = ids.reverse();
        }

        return function (a, b) {
            return ids.indexOf(a.id) - ids.indexOf(b.id);
        };
    }
};
c3_chart_internal_fn.getTooltipContent = function (d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this,
        config = $$.config,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) {
        return name;
    },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        text,
        i,
        title,
        value,
        name,
        bgcolor;

    var tooltipSortFunction = this.getTooltipSortFunction();
    if (tooltipSortFunction) {
        d.sort(tooltipSortFunction);
    }

    for (i = 0; i < d.length; i++) {
        if (!(d[i] && (d[i].value || d[i].value === 0))) {
            continue;
        }

        if (!text) {
            title = sanitise(titleFormat ? titleFormat(d[i].x) : d[i].x);
            text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        value = sanitise(valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index, d));
        if (value !== undefined) {
            // Skip elements when their name is set to null
            if (d[i].name === null) {
                continue;
            }
            name = sanitise(nameFormat(d[i].name, d[i].ratio, d[i].id, d[i].index));
            bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

            text += "<tr class='" + $$.CLASS.tooltipName + "-" + $$.getTargetSelectorSuffix(d[i].id) + "'>";
            text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
            text += "<td class='value'>" + value + "</td>";
            text += "</tr>";
        }
    }
    return text + "</table>";
};
c3_chart_internal_fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3;
    var svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
    var forArc = $$.hasArcType(),
        mouse = d3.mouse(element);
    // Determin tooltip position
    if (forArc) {
        tooltipLeft = ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0];
        tooltipTop = $$.height / 2 + mouse[1] + 20;
    } else {
        svgLeft = $$.getSvgLeft(true);
        if (config.axis_rotated) {
            tooltipLeft = svgLeft + mouse[0] + 100;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = $$.x(dataToShow[0].x) + 20;
        } else {
            tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
            tooltipRight = tooltipLeft + tWidth;
            chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight();
            tooltipTop = mouse[1] + 15;
        }

        if (tooltipRight > chartRight) {
            // 20 is needed for Firefox to keep tooltip width
            tooltipLeft -= tooltipRight - chartRight + 20;
        }
        if (tooltipTop + tHeight > $$.currentHeight) {
            tooltipTop -= tHeight + 30;
        }
    }
    if (tooltipTop < 0) {
        tooltipTop = 0;
    }
    return { top: tooltipTop, left: tooltipLeft };
};
c3_chart_internal_fn.showTooltip = function (selectedData, element) {
    var $$ = this,
        config = $$.config;
    var tWidth, tHeight, position;
    var forArc = $$.hasArcType(),
        dataToShow = selectedData.filter(function (d) {
        return d && isValue(d.value);
    }),
        positionFunction = config.tooltip_position || c3_chart_internal_fn.tooltipPosition;
    if (dataToShow.length === 0 || !config.tooltip_show) {
        return;
    }
    $$.tooltip.html(config.tooltip_contents.call($$, selectedData, $$.axis.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", "block");

    // Get tooltip dimensions
    tWidth = $$.tooltip.property('offsetWidth');
    tHeight = $$.tooltip.property('offsetHeight');

    position = positionFunction.call(this, dataToShow, tWidth, tHeight, element);
    // Set tooltip
    $$.tooltip.style("top", position.top + "px").style("left", position.left + 'px');
};
c3_chart_internal_fn.hideTooltip = function () {
    this.tooltip.style("display", "none");
};

c3_chart_internal_fn.setTargetType = function (targetIds, type) {
    var $$ = this,
        config = $$.config;
    $$.mapToTargetIds(targetIds).forEach(function (id) {
        $$.withoutFadeIn[id] = type === config.data_types[id];
        config.data_types[id] = type;
    });
    if (!targetIds) {
        config.data_type = type;
    }
};
c3_chart_internal_fn.hasType = function (type, targets) {
    var $$ = this,
        types = $$.config.data_types,
        has = false;
    targets = targets || $$.data.targets;
    if (targets && targets.length) {
        targets.forEach(function (target) {
            var t = types[target.id];
            if (t && t.indexOf(type) >= 0 || !t && type === 'line') {
                has = true;
            }
        });
    } else if (Object.keys(types).length) {
        Object.keys(types).forEach(function (id) {
            if (types[id] === type) {
                has = true;
            }
        });
    } else {
        has = $$.config.data_type === type;
    }
    return has;
};
c3_chart_internal_fn.hasArcType = function (targets) {
    return this.hasType('pie', targets) || this.hasType('donut', targets) || this.hasType('gauge', targets);
};
c3_chart_internal_fn.isLineType = function (d) {
    var config = this.config,
        id = isString(d) ? d : d.id;
    return !config.data_types[id] || ['line', 'spline', 'area', 'area-spline', 'step', 'area-step'].indexOf(config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isStepType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['step', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isSplineType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['spline', 'area-spline'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isAreaType = function (d) {
    var id = isString(d) ? d : d.id;
    return ['area', 'area-spline', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
};
c3_chart_internal_fn.isBarType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'bar';
};
c3_chart_internal_fn.isScatterType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'scatter';
};
c3_chart_internal_fn.isPieType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'pie';
};
c3_chart_internal_fn.isGaugeType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'gauge';
};
c3_chart_internal_fn.isDonutType = function (d) {
    var id = isString(d) ? d : d.id;
    return this.config.data_types[id] === 'donut';
};
c3_chart_internal_fn.isArcType = function (d) {
    return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d);
};
c3_chart_internal_fn.lineData = function (d) {
    return this.isLineType(d) ? [d] : [];
};
c3_chart_internal_fn.arcData = function (d) {
    return this.isArcType(d.data) ? [d] : [];
};
/* not used
 function scatterData(d) {
 return isScatterType(d) ? d.values : [];
 }
 */
c3_chart_internal_fn.barData = function (d) {
    return this.isBarType(d) ? d.values : [];
};
c3_chart_internal_fn.lineOrScatterData = function (d) {
    return this.isLineType(d) || this.isScatterType(d) ? d.values : [];
};
c3_chart_internal_fn.barOrLineData = function (d) {
    return this.isBarType(d) || this.isLineType(d) ? d.values : [];
};
c3_chart_internal_fn.isInterpolationType = function (type) {
    return ['linear', 'linear-closed', 'basis', 'basis-open', 'basis-closed', 'bundle', 'cardinal', 'cardinal-open', 'cardinal-closed', 'monotone'].indexOf(type) >= 0;
};

c3_chart_internal_fn.isSafari = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Safari') >= 0 && ua.indexOf('Chrome') < 0;
};
c3_chart_internal_fn.isChrome = function () {
    var ua = window.navigator.userAgent;
    return ua.indexOf('Chrome') >= 0;
};

c3_chart_internal_fn.initZoom = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        startEvent;

    $$.zoom = d3.behavior.zoom().on("zoomstart", function () {
        startEvent = d3.event.sourceEvent;
        $$.zoom.altDomain = d3.event.sourceEvent.altKey ? $$.x.orgDomain() : null;
        config.zoom_onzoomstart.call($$.api, d3.event.sourceEvent);
    }).on("zoom", function () {
        $$.redrawForZoom.call($$);
    }).on('zoomend', function () {
        var event = d3.event.sourceEvent;
        // if click, do nothing. otherwise, click interaction will be canceled.
        if (event && startEvent.clientX === event.clientX && startEvent.clientY === event.clientY) {
            return;
        }
        $$.redrawEventRect();
        $$.updateZoom();
        config.zoom_onzoomend.call($$.api, $$.x.orgDomain());
    });
    $$.zoom.scale = function (scale) {
        return config.axis_rotated ? this.y(scale) : this.x(scale);
    };
    $$.zoom.orgScaleExtent = function () {
        var extent = config.zoom_extent ? config.zoom_extent : [1, 10];
        return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
    };
    $$.zoom.updateScaleExtent = function () {
        var ratio = diffDomain($$.x.orgDomain()) / diffDomain($$.getZoomDomain()),
            extent = this.orgScaleExtent();
        this.scaleExtent([extent[0] * ratio, extent[1] * ratio]);
        return this;
    };
};
c3_chart_internal_fn.getZoomDomain = function () {
    var $$ = this,
        config = $$.config,
        d3 = $$.d3,
        min = d3.min([$$.orgXDomain[0], config.zoom_x_min]),
        max = d3.max([$$.orgXDomain[1], config.zoom_x_max]);
    return [min, max];
};
c3_chart_internal_fn.updateZoom = function () {
    var $$ = this,
        z = $$.config.zoom_enabled ? $$.zoom : function () {};
    $$.main.select('.' + CLASS.zoomRect).call(z).on("dblclick.zoom", null);
    $$.main.selectAll('.' + CLASS.eventRect).call(z).on("dblclick.zoom", null);
};
c3_chart_internal_fn.redrawForZoom = function () {
    var $$ = this,
        d3 = $$.d3,
        config = $$.config,
        zoom = $$.zoom,
        x = $$.x;
    if (!config.zoom_enabled) {
        return;
    }
    if ($$.filterTargetsToShow($$.data.targets).length === 0) {
        return;
    }
    if (d3.event.sourceEvent.type === 'mousemove' && zoom.altDomain) {
        x.domain(zoom.altDomain);
        zoom.scale(x).updateScaleExtent();
        return;
    }
    if ($$.isCategorized() && x.orgDomain()[0] === $$.orgXDomain[0]) {
        x.domain([$$.orgXDomain[0] - 1e-10, x.orgDomain()[1]]);
    }
    $$.redraw({
        withTransition: false,
        withY: config.zoom_rescale,
        withSubchart: false,
        withEventRect: false,
        withDimension: false
    });
    if (d3.event.sourceEvent.type === 'mousemove') {
        $$.cancelClick = true;
    }
    config.zoom_onzoom.call($$.api, x.orgDomain());
};

return c3$1;

})));


/***/ }),

/***/ 8356:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 38146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);
var tryToString = __webpack_require__(40368);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 91592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = (__webpack_require__(72106).has);

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ 98514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(23041);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 64465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(19130);
var toAbsoluteIndex = __webpack_require__(63828);
var lengthOfArrayLike = __webpack_require__(25474);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 74021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 47298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(98216);
var isCallable = __webpack_require__(92163);
var classofRaw = __webpack_require__(74021);
var wellKnownSymbol = __webpack_require__(4259);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 61401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(21325);
var ownKeys = __webpack_require__(20810);
var getOwnPropertyDescriptorModule = __webpack_require__(99206);
var definePropertyModule = __webpack_require__(16572);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 27767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var definePropertyModule = __webpack_require__(16572);
var createPropertyDescriptor = __webpack_require__(48602);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 48602:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 14039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);
var definePropertyModule = __webpack_require__(16572);
var makeBuiltIn = __webpack_require__(85954);
var defineGlobalProperty = __webpack_require__(95861);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 95861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 46372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 45337:
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 94193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isObject = __webpack_require__(23041);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 20283:
/***/ ((module) => {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 55111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var userAgent = __webpack_require__(20283);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 46606:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 65942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var getOwnPropertyDescriptor = (__webpack_require__(99206).f);
var createNonEnumerableProperty = __webpack_require__(27767);
var defineBuiltIn = __webpack_require__(14039);
var defineGlobalProperty = __webpack_require__(95861);
var copyConstructorProperties = __webpack_require__(61401);
var isForced = __webpack_require__(21637);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7931:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 98626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(26832);
var aCallable = __webpack_require__(38146);
var NATIVE_BIND = __webpack_require__(62637);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 62637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 48624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(62637);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 30233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var hasOwn = __webpack_require__(21325);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 26832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(74021);
var uncurryThis = __webpack_require__(73074);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 73074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(62637);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 39997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isCallable = __webpack_require__(92163);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 50610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(47298);
var getMethod = __webpack_require__(54462);
var isNullOrUndefined = __webpack_require__(57900);
var Iterators = __webpack_require__(16133);
var wellKnownSymbol = __webpack_require__(4259);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 11570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var aCallable = __webpack_require__(38146);
var anObject = __webpack_require__(98514);
var tryToString = __webpack_require__(40368);
var getIteratorMethod = __webpack_require__(50610);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 54462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(38146);
var isNullOrUndefined = __webpack_require__(57900);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 63406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 21325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var toObject = __webpack_require__(77410);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 43730:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 53202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var fails = __webpack_require__(7931);
var createElement = __webpack_require__(94193);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 52170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var fails = __webpack_require__(7931);
var classof = __webpack_require__(74021);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 22089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var isCallable = __webpack_require__(92163);
var store = __webpack_require__(12846);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(24617);
var global = __webpack_require__(63406);
var isObject = __webpack_require__(23041);
var createNonEnumerableProperty = __webpack_require__(27767);
var hasOwn = __webpack_require__(21325);
var shared = __webpack_require__(12846);
var sharedKey = __webpack_require__(1320);
var hiddenKeys = __webpack_require__(43730);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 18335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4259);
var Iterators = __webpack_require__(16133);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 92163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(45337);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 21637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(92163);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 57900:
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 23041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(92163);
var $documentAll = __webpack_require__(45337);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 2884:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 85666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);
var isCallable = __webpack_require__(92163);
var isPrototypeOf = __webpack_require__(3071);
var USE_SYMBOL_AS_UID = __webpack_require__(99525);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 10561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);

module.exports = function (iterator, fn, $next) {
  var next = $next || iterator.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 67523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(98626);
var call = __webpack_require__(48624);
var anObject = __webpack_require__(98514);
var tryToString = __webpack_require__(40368);
var isArrayIteratorMethod = __webpack_require__(18335);
var lengthOfArrayLike = __webpack_require__(25474);
var isPrototypeOf = __webpack_require__(3071);
var getIterator = __webpack_require__(11570);
var getIteratorMethod = __webpack_require__(50610);
var iteratorClose = __webpack_require__(31652);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 31652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var anObject = __webpack_require__(98514);
var getMethod = __webpack_require__(54462);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 16133:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 25474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(1403);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 85954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(92163);
var hasOwn = __webpack_require__(21325);
var DESCRIPTORS = __webpack_require__(46372);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(30233).CONFIGURABLE);
var inspectSource = __webpack_require__(22089);
var InternalStateModule = __webpack_require__(3987);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 72106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),

/***/ 91978:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var iterateSimple = __webpack_require__(10561);
var MapHelpers = __webpack_require__(72106);

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple(entries(map), function (entry) {
    return fn(entry[1], entry[0]);
  }, next) : forEach(map, fn);
};


/***/ }),

/***/ 855:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 16572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var IE8_DOM_DEFINE = __webpack_require__(53202);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(58814);
var anObject = __webpack_require__(98514);
var toPropertyKey = __webpack_require__(41973);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 99206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var call = __webpack_require__(48624);
var propertyIsEnumerableModule = __webpack_require__(42251);
var createPropertyDescriptor = __webpack_require__(48602);
var toIndexedObject = __webpack_require__(19130);
var toPropertyKey = __webpack_require__(41973);
var hasOwn = __webpack_require__(21325);
var IE8_DOM_DEFINE = __webpack_require__(53202);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 83311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(51429);
var enumBugKeys = __webpack_require__(46606);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 50395:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 51429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);
var hasOwn = __webpack_require__(21325);
var toIndexedObject = __webpack_require__(19130);
var indexOf = (__webpack_require__(64465).indexOf);
var hiddenKeys = __webpack_require__(43730);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 42251:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 29207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var isCallable = __webpack_require__(92163);
var isObject = __webpack_require__(23041);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 20810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(39997);
var uncurryThis = __webpack_require__(73074);
var getOwnPropertyNamesModule = __webpack_require__(83311);
var getOwnPropertySymbolsModule = __webpack_require__(50395);
var anObject = __webpack_require__(98514);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 65727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(57900);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 32209:
/***/ ((module) => {

// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x != x && y != y;
};


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(78519);
var uid = __webpack_require__(76004);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 12846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var defineGlobalProperty = __webpack_require__(95861);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 78519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(2884);
var store = __webpack_require__(12846);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.30.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 73874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(55111);
var fails = __webpack_require__(7931);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 63828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(70400);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 19130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(52170);
var requireObjectCoercible = __webpack_require__(65727);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 70400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(855);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 1403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(70400);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 77410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(65727);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 18732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(48624);
var isObject = __webpack_require__(23041);
var isSymbol = __webpack_require__(85666);
var getMethod = __webpack_require__(54462);
var ordinaryToPrimitive = __webpack_require__(29207);
var wellKnownSymbol = __webpack_require__(4259);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 41973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(18732);
var isSymbol = __webpack_require__(85666);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 98216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4259);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 40368:
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 76004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(73074);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 99525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(73874);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 58814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(46372);
var fails = __webpack_require__(7931);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 24617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var isCallable = __webpack_require__(92163);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 4259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(63406);
var shared = __webpack_require__(78519);
var hasOwn = __webpack_require__(21325);
var uid = __webpack_require__(76004);
var NATIVE_SYMBOL = __webpack_require__(73874);
var USE_SYMBOL_AS_UID = __webpack_require__(99525);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 13929:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var aMap = __webpack_require__(91592);
var remove = (__webpack_require__(72106).remove);

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ }),

/***/ 57851:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (!boundFunction(value, key, map)) return false;
    }, true) !== false;
  }
});


/***/ }),

/***/ 63633:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var MapHelpers = __webpack_require__(72106);
var iterate = __webpack_require__(91978);

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) set(newMap, key, value);
    });
    return newMap;
  }
});


/***/ }),

/***/ 67515:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { key: key };
    }, true);
    return result && result.key;
  }
});


/***/ }),

/***/ 81652:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { value: value };
    }, true);
    return result && result.value;
  }
});


/***/ }),

/***/ 68034:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var sameValueZero = __webpack_require__(32209);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate(aMap(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});


/***/ }),

/***/ 61480:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.keyOf` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  keyOf: function keyOf(searchElement) {
    var result = iterate(aMap(this), function (value, key) {
      if (value === searchElement) return { key: key };
    }, true);
    return result && result.key;
  }
});


/***/ }),

/***/ 59027:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var MapHelpers = __webpack_require__(72106);
var iterate = __webpack_require__(91978);

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, boundFunction(value, key, map), value);
    });
    return newMap;
  }
});


/***/ }),

/***/ 35739:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var MapHelpers = __webpack_require__(72106);
var iterate = __webpack_require__(91978);

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, key, boundFunction(value, key, map));
    });
    return newMap;
  }
});


/***/ }),

/***/ 99283:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(67523);
var set = (__webpack_require__(72106).set);

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable /* ...iterables */) {
    var map = aMap(this);
    var argumentsLength = arguments.length;
    var i = 0;
    while (i < argumentsLength) {
      iterate(arguments[i++], function (key, value) {
        set(map, key, value);
      }, { AS_ENTRIES: true });
    }
    return map;
  }
});


/***/ }),

/***/ 4473:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var aCallable = __webpack_require__(38146);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

var $TypeError = TypeError;

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = aMap(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(map, function (value, key) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    });
    if (noInitial) throw $TypeError('Reduce of empty map with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ 90989:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var bind = __webpack_require__(98626);
var aMap = __webpack_require__(91592);
var iterate = __webpack_require__(91978);

// `Map.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return true;
    }, true) === true;
  }
});


/***/ }),

/***/ 17194:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(65942);
var aCallable = __webpack_require__(38146);
var aMap = __webpack_require__(91592);
var MapHelpers = __webpack_require__(72106);

var $TypeError = TypeError;
var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  update: function update(key, callback /* , thunk */) {
    var map = aMap(this);
    var length = arguments.length;
    aCallable(callback);
    var isPresentInMap = has(map, key);
    if (!isPresentInMap && length < 3) {
      throw $TypeError('Updating absent value');
    }
    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
    set(map, key, callback(value, key, map));
    return map;
  }
});


/***/ }),

/***/ 59633:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 91389:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 92846:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
        }
      }
  };