/**
 * app menu items
 */
export default {
  live: {
    title: 'Live',
    icon: 'live_tv',
    path: '/live',
    items: {
      detection: {
        title: 'Detection',
        path: '/detection'
      }
    }
  },
  ondemand: {
    title: 'On-Demand',
    icon: 'ondemand_video',
    path: '/ondemand',
    items: {
      analysis: {
        title: 'Analysis',
        path: '/analysis'
      }
    }
  },
  setting: {
    title: 'Setting',
    icon: 'settings',
    path: '/setting'
  }
}
