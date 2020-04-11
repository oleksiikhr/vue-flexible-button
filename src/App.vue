<template>
  <div id="app">
    <h3 class="mt-0">Input</h3>
    <base-button message="Props" />
    <base-button :message="12345" />
    <base-button>Slots</base-button>
    <base-button><strong>HTML</strong></base-button>

    <h3>Colors</h3>
    <base-button message="Default" color="default" />
    <base-button message="Primary" color="primary" />
    <base-button message="Secondary" color="secondary" />

    <h3>Sizes</h3>
    <base-button message="Small" size="small" />
    <base-button message="Medium" size="medium" />
    <base-button message="Large" size="large" />

    <h3>Loading</h3>
    <base-button message="Loading, always" loading />
    <base-button message="Loading, clickable" :loading="clicked1" @click="onClick1" />

    <h3>Disabled</h3>
    <base-button message="Disabled, always" disabled @click="onClick" />
    <base-button message="Disabled, clickable" :disabled="clicked2" @click="onClick" />

    <h3>Disabled / Loading</h3>
    <base-button message="Disabled / Loading, always" disabled loading @click="onClick" />
    <base-button message="Disabled / Loading, clickable" :disabled="clicked2" :loading="clicked2" @click="onClick" />

    <h3>HTML</h3>
    <base-button message="Span" component="span" />
    <base-button message="Link" component="a" href="/" target="_blank" />
    <base-button message="Router Link" component="router-link" :to="{ name: 'foo' }" />

    <h3>Right Icon</h3>
    <base-button message="Props" right-icon="favorite" />
    <base-button message="Slots">
      <template #right-icon>
        <span class="material-icons">settings</span>
      </template>
    </base-button>
    <base-button message="Primary" color="primary" right-icon="favorite" />

    <h3>Left Icon</h3>
    <base-button message="Props" left-icon="favorite" />
    <base-button message="Slots">
      <template #left-icon>
        <span class="material-icons">settings</span>
      </template>
    </base-button>
    <base-button message="Primary" color="primary" left-icon="favorite" />
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      clicked1: false,
      clicked2: false
    }
  },
  methods: {
    onClick1() {
      this.clicked1 = !this.clicked1
    },
    onClick() {
      this.clicked2 = true
      // Some kind of ajax request that will complete after 2 seconds
      new Promise((resolve) => {
        setTimeout(() => resolve(), 2000)
      })
      .finally(() => this.clicked2 = false)
    }
  }
}
</script>
