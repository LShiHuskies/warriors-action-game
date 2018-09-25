
const defaultState = {
    top: 100,
    left: 400,
    playerHealth: 100,
    secondplayer: null,
    defaultDirection: {
      image: 'https://www.freepngimg.com/thumb/dragon_ball/21449-6-vegeta-file-thumb.png',
      width: '8',
      characterdirection: 'DOWN'
    },
    attackTop: null,
    attackLeft: null,
    degree: 0,
    attack: false,
    attackTop2: null,
    attackLeft2: null,
    attackTop3: null,
    attackLeft3: null
  }


export default function secondPlayMovements(state = defaultState, action) {
  switch(action.type) {
    case 'OPERATIONGETSECONDPLAYER':

    return {
      ...state, secondplayer: action.payload
    }

    case 'MOVE TWO LEFT':
    if (state.left < 2) {
      return state
    }

    return {
      ...state, left: state.left - 15
    }

    case 'MOVE TWO RIGHT':

    if (state.left > window.innerWidth - 60 )
    return state

    return {
      ...state, left: Number(state.left) + 15
    }

    case 'MOVE TWO UP':
    if (state.top < 2)
      return state

    return {
      ...state, top: Number(state.top) - 15
    }

    case 'MOVE TWO DOWN':
    if (state.top > window.innerHeight - 100)
      return state

    return {
      ...state, top: Number(state.top) + 15
    }

    case 'MOVE TWO LEFT UP':
    if (state.top < 5 || state.left < 2) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: state.left - 15
    }

    case 'MOVE TWO LEFT DOWN':
    if (state.top > window.innerHeight - 140 || state.left < 2) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: state.left - 15
    }

    case 'MOVE TWO RIGHT UP':
    if (state.top < 2 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: Number(state.left) + 15
    }

    case 'MOVE TWO RIGHT DOWN':
    if (state.top > window.innerHeight - 140 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: Number(state.left) + 15
    }

    case 'LOOKRIGHT TWO':

    return {
      ...state, defaultDirection: {
        image: 'http://www.dustloop.com/wiki/images/5/52/DBFZ_SS_Vegeta_Portrait.png',
        width: '4',
        characterdirection: 'RIGHT'
      }
    }

    case 'LOOKLEFT TWO':

    return {
        ...state, defaultDirection: {
        image: 'http://www.spriters-resource.com/resources/sheet_icons/64/67278.png',
        width: '7.5',
        characterdirection: 'LEFT'
      }
    }

    case 'LOOKDOWN TWO':

    return {
      ...state, defaultDirection: {
        image: 'https://www.freepngimg.com/thumb/dragon_ball/21449-6-vegeta-file-thumb.png',
        width: '8',
        characterdirection: 'DOWN'
      }
    }

    case 'LOOKUP TWO':
    // image: 'https://img00.deviantart.net/cb6d/i/2011/296/c/6/ssj_vegeta_on_namek_by_enoch_rising-d4ds43e.png',
    // https://1.bp.blogspot.com/-PAFPhaoEP_8/WCS0x-yuiTI/AAAAAAAAX_Q/0GbvV9-nsI4vmKAfaG6g0kYmA-U9dAlTACLcB/s1600/SH%2BFiguarts%2BSuper%2BSaiyan%2BVegeta%2B04.JPG
    return {
      ...state, defaultDirection: {
        image: 'https://img00.deviantart.net/cb6d/i/2011/296/c/6/ssj_vegeta_on_namek_by_enoch_rising-d4ds43e.png',
        width: '5.3',
        characterdirection: 'UP'
      }
    }

    case 'ATTACKLEFT TWO':

    return {
      ...state, attackTop: state.top + 15,
      attackLeft: state.left - 50,
      degree: 180
    }

    case 'ATTACKRIGHT TWO':

    return {
      ...state, attackTop: state.top + 15,
      attackLeft: state.left + 42,
      degree: 0
    }

    case 'ATTACKDOWN TWO':

    return {
      ...state, attackTop: state.top + 120,
      attackLeft: state.left + 19,
      degree: 90
    }

    case 'ATTACKUP TWO':

    return {
      ...state, attackTop: Number(state.top) - 75, attackLeft: Number(state.left) - 5, degree: '270'
    }

    case 'ENEMYSUCCESSFULATTACKLEFTVEGETA':

    return {
      ...state, playerHealth: Number(state.playerHealth) - 5,
      left: state.left - 40
    }

    case 'ENEMYSUCCESSFULATTACKRIGHTVEGETA':

    return {
      ...state, playerHealth: Number(state.playerHealth) - 5,
      left: state.left + 40
    }

    case 'TELEPORTVEGETALEFT':

    return {
      ...state, top: 100, left: 300, playerHealth: state.playerHealth - 1
    }

    case 'TELEPORTVEGETARIGHT':

    return {
      ...state, top: 800, left: 1100, playerHealth: state.playerHealth - 1
    }

    case 'GINYUGOTVEGETA':

    return {
      ...state, playerHealth: state.playerHealth - 2.5
    }

    case 'SETSCORETOALL':

    return {
      ...state, playerHealth: action.payload.playerTwoHealth, top: action.payload.playerTwoTop, left: action.payload.playerTwoLeft
    }

    case 'RESTORE':

    return {
      ...state, playerHealth: 100
    }

    case 'RESTORELEVEL3':

    return {
      ...state, playerHealth: 100
    }

    case 'RESTORELEVEL4':

    return {
      ...state, playerHealth: 100
    }

    case 'ATTACKLEFT TWO SECONDONE':

    return {
      ...state, attackTop2: Number(state.top) + 15, attackLeft2: Number(state.left) - 50, degree: '180'
    }

    case 'ATTACKRIGHT TWO SECONDONE':

    return {
      ...state, attackTop2: Number(state.top) + 15, attackLeft2: Number(state.left) + 42, degree: '0'
    }

    case 'ATTACKDOWN TWO SECONDONE':

    return {
      ...state, attackTop2: state.top + 120,
      attackLeft2: state.left + 19,
      degree: 90
    }

    case 'ATTACKUP TWO SECONDONE':

    return {
      ...state, attackTop2: Number(state.top) - 75, attackLeft2: Number(state.left) - 5, degree: '270'
    }

    case 'TELEPORTVEGETAANDPLAYER':

    return {
      ...state, playerHealth: state.playerHealth - 10,
      top: 480, left: 500
    }

    case 'ATTACKRIGHT TWO THIRDONE':

    return {
      ...state, attackTop3: Number(state.top) + 15, attackLeft3: Number(state.left) + 42, degree: '0'
    }

    case 'ATTACKLEFT TWO THIRDONE':

    return {
      ...state, attackTop3: state.top + 15,
      attackLeft3: state.left - 50,
      degree: 180
    }

    case 'ATTACKDOWN TWO THIRDONE':

    return {
      ...state, attackTop3: state.top + 120,
      attackLeft3: state.left + 19,
      degree: 90
    }

    case 'ATTACKUP TWO THIRDONE':

    return {
      ...state, attackTop3: Number(state.top) - 75, attackLeft3: Number(state.left) - 5, degree: '270'
    }

  default:
    return state
  }


}
