import Clipboard from 'clipboard'

const clipboard = {
  beforeMount: function (el, binding, vnode) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      const clipboard = new Clipboard(el, {
        text: function () { return binding.value },
        action: function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
      clipboard.on('success', function (e) {
        const callback = el._v_clipboard_success
        callback && callback(e)
      })
      clipboard.on('error', function (e) {
        const callback = el._v_clipboard_error
        callback && callback(e)
      })
      el._v_clipboard = clipboard
    }
  },
  updated: function (el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      el._v_clipboard.text = function () { return binding.value }
      el._v_clipboard.action = function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
    }
  },
  unmounted: function (el, binding) {
    if (binding.arg === 'success') {
      delete el._v_clipboard_success
    } else if (binding.arg === 'error') {
      delete el._v_clipboard_error
    } else {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  }
}

export {
  clipboard
}
