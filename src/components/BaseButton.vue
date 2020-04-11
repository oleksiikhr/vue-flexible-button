<template>
  <button
    :class="['base-button', `base-button_${color}`, `base-button_${size}`, {
      'base-button_right_icon': hasRightIcon,
      'base-button_left_icon': hasLeftIcon,
      'base-button_disabled': disabled,
      'base-button_loading': loading
    }]"
    :is="component"
    v-bind="$attrs"
    v-on="listeners"
  >
    <span
      v-if="hasLeftIcon"
      class="base-button__left_icon"
    >
      <slot name="left-icon">
        <span class="material-icons">{{ leftIcon }}</span>
      </slot>
    </span>
    <span class="base-button__content">
      <slot>{{ message }}</slot>
    </span>
    <span
      v-if="hasRightIcon"
      class="base-button__right_icon"
    >
      <slot name="right-icon">
        <span class="material-icons">{{ rightIcon }}</span>
      </slot>
    </span>
    <span
      v-show="loading"
      class="base-button__loading"
    />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    message: {
      type: [String, Number],
      default: ''
    },
    color: {
      type: String,
      default: 'default',
      validator: (val) => ~['primary', 'secondary', 'default'].indexOf(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ~['small', 'medium', 'large'].indexOf(val)
    },
    component: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
  },
  computed: {
    // We change the basic behavior of some events
    listeners() {
      return {
        ...this.$listeners,
        click: this.onClick
      }
    },
    hasLeftIcon() {
      return !!this.leftIcon || !!this.$slots['left-icon']
    },
    hasRightIcon() {
      return !!this.rightIcon || !!this.$slots['right-icon']
    }
  },
  methods: {
    // Send click events only when the button is active
    onClick(evt) {
      if (this.disabled) {
        return
      }

      this.$emit('click', evt)
    }
  }
}
</script>
