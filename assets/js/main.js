// Main JavaScript for MetalHeat Academy

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Temperature-Time Chart
let temperatureChart;
let hardnessChart;

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // Temperature-Time Chart
    const tempCtx = document.getElementById('temperatureChart');
    if (tempCtx) {
        temperatureChart = new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
                datasets: [{
                    label: 'Annealing Cycle',
                    data: [20, 750, 850, 850, 850, 600, 400, 200, 20],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature vs Time'
                    },
                    legend: {
                        display: true
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (hours)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        },
                        min: 0,
                        max: 1000
                    }
                }
            }
        });
    }

    // Hardness Comparison Chart
    const hardnessCtx = document.getElementById('hardnessChart');
    if (hardnessCtx) {
        hardnessChart = new Chart(hardnessCtx, {
            type: 'bar',
            data: {
                labels: ['Annealed', 'Normalized', 'Quenched', 'Tempered', 'Nitrided', 'Carburized'],
                datasets: [{
                    label: 'Hardness (HRC)',
                    data: [15, 25, 60, 45, 65, 58],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(236, 72, 153, 0.8)'
                    ],
                    borderColor: [
                        'rgb(59, 130, 246)',
                        'rgb(16, 185, 129)',
                        'rgb(239, 68, 68)',
                        'rgb(245, 158, 11)',
                        'rgb(139, 92, 246)',
                        'rgb(236, 72, 153)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Typical Hardness Values'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 70,
                        title: {
                            display: true,
                            text: 'Hardness (HRC)'
                        }
                    }
                }
            }
        });
    }
}

// Show different heat treatment processes
function showProcess(processType) {
    if (!temperatureChart) return;

    const processData = {
        annealing: {
            label: 'Annealing Cycle',
            data: [20, 750, 850, 850, 850, 600, 400, 200, 20],
            color: 'rgb(59, 130, 246)',
            bgColor: 'rgba(59, 130, 246, 0.1)'
        },
        quenching: {
            label: 'Quenching Cycle',
            data: [20, 900, 950, 950, 20, 20, 20, 20, 20],
            color: 'rgb(239, 68, 68)',
            bgColor: 'rgba(239, 68, 68, 0.1)'
        },
        tempering: {
            label: 'Tempering Cycle',
            data: [20, 20, 20, 400, 400, 400, 300, 200, 20],
            color: 'rgb(16, 185, 129)',
            bgColor: 'rgba(16, 185, 129, 0.1)'
        },
        nitriding: {
            label: 'Nitriding Cycle',
            data: [20, 520, 540, 540, 540, 540, 540, 400, 20],
            color: 'rgb(139, 92, 246)',
            bgColor: 'rgba(139, 92, 246, 0.1)'
        }
    };

    const selectedProcess = processData[processType];
    
    temperatureChart.data.datasets[0] = {
        label: selectedProcess.label,
        data: selectedProcess.data,
        borderColor: selectedProcess.color,
        backgroundColor: selectedProcess.bgColor,
        tension: 0.4,
        fill: true
    };
    
    temperatureChart.update();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-hover');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);