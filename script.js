// CÓDIGO PARA O SITE DA PAF3 ENGENHARIA

console.log('🚀 Site da PAF3 Engenharia carregado com sucesso!');

// Quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // EFEITO SUAVE AO CLICAR NOS LINKS DO MENU
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Calcula a posição considerando o header fixo
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Rolagem suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log(`📌 Navegando para: ${targetId}`);
            }
        });
    });
    
    // ANIMAÇÃO NOS CARDS DE SERVIÇOS
    const serviceCards = document.querySelectorAll('.servico-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // BOTÃO DO WHATSAPP - MENSAGEM PERSONALIZADA
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            console.log('📱 Redirecionando para WhatsApp...');
            // Aqui você pode adicionar mais lógica se quiser
        });
    }
    
    // EFETIO DE DIGITAÇÃO NO TÍTULO PRINCIPAL (OPCIONAL)
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Inicia o efeito após 1 segundo
        setTimeout(typeWriter, 1000);
    }
    
    // MENSAGEM NO CONSOLE PARA DEBUG
    console.log('✅ Todas as funcionalidades JavaScript foram carregadas!');
});

// FUNÇÃO PARA MOSTRAR ALERTA DE CONTATO (OPCIONAL)
function mostrarContato() {
    alert('📞 Entre em contato conosco!\nWhatsApp: (11) 99999-9999\nEmail: contato@paf3engenharia.com.br');
}