document.addEventListener('alpine:init', () => {
    Alpine.data('skillDisplay', () => ({
        skills: [{
                'title': 'HTML',
                'percent': '95',
            },
            {
                'title': 'CSS',
                'percent': '80',
            },
            {
                'title': 'Tailwind CSS',
                'percent': '95',
            },
            {
                'title': 'JavaScript',
                'percent': '70',
            },
            {
                'title': 'Bootstrap',
                'percent': '80',
            }, {
                'title': 'PHP',
                'percent': '65',
            }, {
                'title': 'Laravel',
                'percent': '55',
            }, {
                'title': 'D.Markeing',
                'percent': '60',
            }
        ],
        currentSkill: {
            'title': 'HTML',
            'percent': '95',
        }
    }));
});

