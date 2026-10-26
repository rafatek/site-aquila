/**
 * Simulator & Contact Form Handler
 * Phone masking and direct WhatsApp redirection with form values
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('simulacaoForm');
  const phoneInput = document.getElementById('telefone');

  // Phone masking: (XX) XXXXX-XXXX
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);

      if (val.length > 10) {
        val = val.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (val.length > 6) {
        val = val.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (val.length > 2) {
        val = val.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else if (val.length > 0) {
        val = val.replace(/^(\d{0,2})/, '($1');
      }
      e.target.value = val;
    });
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome')?.value.trim() || '';
      const telefone = phoneInput?.value.trim() || '';
      const regiao = document.getElementById('regiao')?.value || '';
      const submitBtn = form.querySelector('.form-btn-submit');

      const mensagem = `Olá! Tenho interesse em uma simulação de financiamento imobiliário.\n\n👤 Nome: ${nome}\n📱 Telefone: ${telefone}\n📍 Região: ${regiao}`;
      const encodedMsg = encodeURIComponent(mensagem);
      const whatsappUrl = `https://wa.me/5511986966302?text=${encodedMsg}`;

      // Button feedback
      if (submitBtn) {
        const originalContent = submitBtn.innerHTML;
        submitBtn.classList.add('submitted');
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Enviando...
        `;

        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
          submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Enviado com sucesso!
          `;

          setTimeout(() => {
            form.reset();
            submitBtn.classList.remove('submitted');
            submitBtn.innerHTML = originalContent;
          }, 3000);
        }, 500);
      } else {
        window.open(whatsappUrl, '_blank');
      }
    });
  }
});
