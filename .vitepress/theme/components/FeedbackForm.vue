<template>
  <div class="feedback-container">
    <div class="feedback-card">
      <div class="card-header">
        <span class="icon">📬</span>
        <div>
          <h4>反馈与提问</h4>
          <p class="desc">对本篇内容有疑问或建议？可以提交留言，作者会尽快回复。</p>
        </div>
      </div>
      
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="d596980c-4731-4262-95ad-1845b4bc7ed7" />
        <input type="hidden" name="from_name" value="FDSM 生存指南读者" />
        <input type="hidden" name="来源页面" :value="currentPath" />

        <div class="form-item">
          <input 
            type="text" 
            name="读者联系方式" 
            placeholder="你的微信 / 邮箱（方便回复你，选填）" 
            class="input-field" 
          />
        </div>

        <div class="form-item">
          <textarea 
            name="留言内容" 
            required 
            rows="3" 
            placeholder="写下你的疑问、吐槽或内容勘误..." 
            class="textarea-field"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">发送留言</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<style scoped>
.feedback-container {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.feedback-card {
  background: var(--vp-c-bg-soft);
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-header .icon {
  font-size: 1.5rem;
  line-height: 1;
}

.card-header h4 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.desc {
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.form-item {
  margin-bottom: 0.75rem;
}

.input-field,
.textarea-field {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.textarea-field {
  resize: vertical;
}

.submit-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 0.45rem 1.25rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}
</style>
