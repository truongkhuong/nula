<template>
  <n-scrollbar x-scrollable :size="1">
    <div class="pb-3">
      <n-space align="center" item-style="display: flex;" :wrap-item="false" :wrap="false">
        <n-tag :bordered="false" closable>
          Real Love
        </n-tag>
        <n-tag :bordered="false" type="success" closable>
          Yes It Is
        </n-tag>
        <n-tag :bordered="false" type="warning" closable>
          I'm Down
        </n-tag>
        <n-tag :bordered="false" type="error" closable>
          Yesterday
        </n-tag>
        <n-tag :bordered="false" type="info" closable>
          I'm Looking Through You
        </n-tag>
        <n-tag :bordered="false" closable>
          Real Love
        </n-tag>
        <n-tag :bordered="false" type="success" closable>
          Yes It Is
        </n-tag>
        <n-tag :bordered="false" type="warning" closable>
          I'm Down
        </n-tag>
        <n-tag :bordered="false" type="error" closable>
          Yesterday
        </n-tag>
        <n-tag :bordered="false" type="info" closable>
          I'm Looking Through You
        </n-tag>
        <n-tag :bordered="false" closable>
          Real Love
        </n-tag>
        <n-tag :bordered="false" type="success" closable>
          Yes It Is
        </n-tag>
        <n-tag :bordered="false" type="warning" closable>
          I'm Down
        </n-tag>
        <n-tag :bordered="false" type="error" closable>
          Yesterday
        </n-tag>
        <n-tag :bordered="false" type="info" closable>
          I'm Looking Through You
        </n-tag>
      </n-space>
    </div>
  </n-scrollbar>

  <div class="grid grid-cols-3 gap-3">
    <n-card title="Card">
      Card Content
    </n-card>
    <n-card title="Card">
      Card Content
    </n-card>
    <n-card title="Card">
      Card Content
    </n-card>
  </div>
  <div class="grid grid-cols-6 gap-3 mt-3">
    <n-card title="Card" v-for="item in [1,2,3,4,5,6]">
      Card Content
    </n-card>
  </div>
  <n-space align="baseline">
    <n-button size="tiny">
      Small Small
    </n-button>
    <n-button size="small">
      Small
    </n-button>
    <n-button size="medium">
      Not Small
    </n-button>
    <n-button size="large">
      Not Not Small
    </n-button>
  </n-space>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
    <n-button @click="notify('info')">
      Info
    </n-button>
    <n-button @click="notify('success')">
      Success
    </n-button>
    <n-button @click="notify('warning')">
      Warning
    </n-button>
    <n-button @click="notify('error')">
      Error
    </n-button>
  </n-space>
</template>

<script lang="ts">
import { useNotification, NotificationType } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const notification = useNotification()
    return {
      notify (type: NotificationType) {
        notification[type]({
          content: 'What to say?',
          meta: "I don't know",
          duration: 2500,
          keepAliveOnHover: true
        })
      }
    }
  }
})
</script>