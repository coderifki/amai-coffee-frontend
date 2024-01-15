export const choose = [
  {
    title: 'Login',
    image: '/assets/images/dashboard/dashboard_choose_personal.png',
    link: '/auth/login',
    value: 'login',
  },
]

export const menuItem = {
  links: [
    {
      link: '/about',
      label: 'Dashboard',
    },
    {
      link: '/user',
      label: 'User',
      links: [
        {
          link: '/user/mahasiswa',
          label: 'Mahasiswa',
        },
        {
          link: '/dosen',
          label: 'Dosen',
        },
        {
          link: '/orang-tua',
          label: 'Orang Tua',
        },
        {
          link: '/staff',
          label: 'Staff',
        },
        {
          link: '/evaluasi',
          label: 'Evaluasi Mahasiswa',
          links: [
            {
              link: '/ujian',
              label: 'Ujian',
            },
            {
              link: '/nilai',
              label: 'Nilai',
            },
          ],
        },
      ],
    },
    {
      link: '/classroom',
      label: 'Classroom',
      links: [
        {
          link: '/kelas',
          label: 'Kelas',
        },
        {
          link: '/ruang-kelas',
          label: 'Ruang Kelas',
        },
      ],
    },
    {
      link: '/attencande',
      label: 'Attendance',
    },
    {
      link: '/payment',
      label: 'Payments',
    },
    {
      link: '/canteen',
      label: 'Canteen',
      links: [
        {
          link: '/kantin',
          label: 'Kantin',
        },
        {
          link: '/pembayaran',
          label: 'Pembayaran',
        },
        {
          link: '/laporan-canteen',
          label: 'Laporan Kantin',
        },
      ],
    },
  ],
}

export const DataSelectedActivity = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
]

export const CardHeaderIcon = [
  {
    imageUrl: '/dev/student.png',
    title: 'Mahsiswa',
    count: 53540,
  },
  {
    imageUrl: '/dev/student.png',
    title: 'Dosen',
    count: 540,
  },
  {
    imageUrl: '/dev/student.png',
    title: 'Faktur',
    count: 1540,
  },
  {
    imageUrl: '/dev/student.png',
    title: 'Kegiatan',
    count: 285,
  },
]

export const staticLineChatData = [
  {
    primeText: '24.7K',
    percentage: '+49%',
    description: 'Unique Visitors',
  },
  {
    primeText: '24.7K',
    percentage: '+49%',
    description: 'Unique Visitors',
  },
  {
    primeText: '24.7K',
    percentage: '+49%',
    description: 'Unique Visitors',
  },
  {
    primeText: '24.7K',
    percentage: '+49%',
    description: 'Unique Visitors',
  },
]

export const comingSoonActivity = [
  {
    date: '11 May 2023',
    description: 'Ajukan Libur Semester',
  },
  {
    date: '8 May 2023',
    description: 'Ajukan Libur Semester',
  },
]
