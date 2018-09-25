import React from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';
import SecondPlayerAttack from './SecondPlayerAttack';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';
import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2'
import createMovesTwo from '../constants/adapter2';

var leftAttackProjectile = [];
var rightAttackProjectile = [];

let leftAttackProjectile2 = [];
let rightAttackProjectile2 = [];

let leftAttackProjectile3 = [];
let rightAttackProjectile3= [];

let downAttackProjectile = [];
let downAttackProjectile2 = [];
let downAttackProjectile3 = [];

let upAttackProjectile = [];
let upAttackProjectile2 = [];
let upAttackProjectile3 = [];


class SecondPlayer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      attack: false,
      leftAttack: null,
      topAttack: null,
      degree: this.props.degree,
      attack2: false,
      leftAttack2: null,
      topAttack2: null,
      attack3: false,
      leftAttack3: null,
      topAttack3: null
    }
  }

  componentDidMount() {

    if (this.props.clicked === false ) {
      window.addEventListener('keydown', this.handleControls)
    }
  }


  handleControls = (event) => {
    switch (event.keyCode) {

      case 65:
        let action = {
          type: 'MOVE TWO LEFT'
        }
        // this.props.dispatch(action)

        let body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        }

        createMovesTwo(body)

      break;

      case 68:
        action = {
          type: 'MOVE TWO RIGHT'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        }
        createMovesTwo(body);


      break;

      case 87:
         action = {
          type: 'MOVE TWO UP'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        }

        createMovesTwo(body)


      break;

      case 83:
        action = {
          type: 'MOVE TWO DOWN'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        }

        createMovesTwo(body)


      break;

      case 81:
        action = {
          type: 'MOVE TWO LEFT UP'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


      break;

      case 90:
        action = {
          type: 'MOVE TWO LEFT DOWN'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body)

      break;

      case 69:
        action = {
          type: 'MOVE TWO RIGHT UP'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


      break;

      case 67:
        action = {
          type: 'MOVE TWO RIGHT DOWN'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


      break;

      case 39:

        action = {
          type: 'LOOKRIGHT TWO'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


        break;

      case 37:

        action = {
          type: 'LOOKLEFT TWO'
        }

        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


      break;

      case 38:

        action = {
          type: 'LOOKUP TWO'
        }

        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);

      break;

      case 40:

        action = {
          type: 'LOOKDOWN TWO'
        }
        // this.props.dispatch(action)

        body = {
          top: this.props.top,
          left: this.props.left,
          type: action
        };

        createMovesTwo(body);


      break;

      case 32:

      if (this.props.characterdirection === 'LEFT' && this.state.attack === false) {

      action = {
        type: "ATTACKLEFT TWO"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    } else if ( this.props.characterdirection === 'LEFT' && this.state.attack === true
    && this.state.attack2 === false && this.state.leftAttack2 === null ) {
      action = {
        type: "ATTACKLEFT TWO SECONDONE"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    } else if ( this.props.characterdirection === 'LEFT' && this.state.attack === true
    && this.state.attack2 === true && this.state.attack3 === false && this.state.leftAttack3 === null ) {
      action = {
        type: "ATTACKLEFT TWO THIRDONE"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    } // end of the else if for the leftattack 3 for player two

    else if (this.props.characterdirection === 'RIGHT' && this.state.attack === false ) {
      action = {
        type: "ATTACKRIGHT TWO"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    }  // end of the else if statement for first right attack for vegeta

    else if ( this.props.characterdirection === 'RIGHT' && this.state.attack === true
    && this.state.attack2 === false && this.state.leftAttack2 === null ) {
      action = {
        type: "ATTACKRIGHT TWO SECONDONE"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    } // end of the else if statement for the second right attack for vegeta
    else if ( this.props.characterdirection === 'RIGHT' && this.state.attack === true
    && this.state.attack2 === true && this.state.attack3 === false && this.state.leftAttack3 === null ) {
      action = {
        type: "ATTACKRIGHT TWO THIRDONE"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } else if ( this.props.characterdirection === 'DOWN' && this.state.attack === false && this.state.leftAttack === null) {
      action = {
        type: "ATTACKDOWN TWO"
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } // end of the else if for the downattack 1 for vegeta
    else if (this.props.characterdirection === 'DOWN' && this.state.attack === true
    && this.state.attack2 === false && this.state.leftAttack2 === null ) {
      // this is the start for the downward direction


      action = {
        type: "ATTACKDOWN TWO SECONDONE"
      }
      // this.props.dispatch(action)

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } //  this is the end of the downward direction third attack for vegeta
    else if (this.props.characterdirection === 'DOWN' && this.state.attack === true
    && this.state.attack2 === true && this.state.attack3 === false && this.state.leftAttack3 === null) {

      action = {
        type: "ATTACKDOWN TWO THIRDONE"
      }
      // this.props.dispatch(action)

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } // this is the end of the attack down third one
    else if (this.props.characterdirection === 'UP' && this.state.attack === false
    && this.state.leftAttack === null) {
      action = {
        type: 'ATTACKUP TWO'
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } // end of the else if for up direction One for vegeta
    else if (this.props.characterdirection === 'UP' && this.state.attack === true
    && this.state.attack2 === false && this.state.leftAttack2 === null ) {
      action = {
        type: 'ATTACKUP TWO SECONDONE'
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } // end of the attackup two second one for vegeta
    else if ( this.props.characterdirection === 'UP' && this.state.attack === true
    && this.state.attack2 === true && this.state.attack3 === false && this.state.leftAttack3 === null ) {


      action = {
        type: 'ATTACKUP TWO THIRDONE'
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);

    } // end of the else if for third attack up for vegeta


    break;

    case 13:

    if (this.props.left > 750) {
      let action = {
        type: 'TELEPORTVEGETALEFT'
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    } else if (this.props.left < 750) {

      let action = {
        type: 'TELEPORTVEGETARIGHT'
      }

      body = {
        top: this.props.top,
        left: this.props.left,
        attackTop: this.props.attackTop,
        attackLeft: this.props.attackLeft,
        type: action
      };

      createMovesTwo(body);


    }
    break;

    default:
      console.log('We got here')

  } // end of the switch statements

} // end of the function

  handleReceived = (event) => {
    this.props.dispatch(event.type)

    if (event.type.type === 'ATTACKLEFT TWO') {
      this.setState({
        attack: true,
        leftAttack: this.props.leftAttack,
        topAttack: this.props.topAttack,
        degree: this.props.degree
      }, () => {
        leftAttackProjectile.push(setInterval(
          () =>  this.setState({
          leftAttack: this.state.leftAttack - 5,
          topAttack: this.state.topAttack
      }, () => { if (this.state.leftAttack < 0) {
        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })
        clearInterval(leftAttackProjectile.pop())
      } else if (  (this.state.leftAttack < this.props.enemyLeft + 20 && this.state.leftAttack > this.props.enemyLeft - 20)
        && (this.state.topAttack > this.props.enemyTop - 50 && this.state.topAttack < this.props.enemyTop + 105  )
              ) {

                let action = {
                  type: 'HITFRIEZALEFT'
                }
              this.props.dispatch(action)

        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })
        clearInterval(leftAttackProjectile.pop())

      } // end of the else if statement for left attack
      else if (( this.state.topAttack > this.props.enemyAttackTop - 30 && this.state.topAttack < this.props.enemyAttackTop + 30 )
      && ( this.state.leftAttack < this.props.enemyAttackLeft + 5 && this.state.leftAttack > this.props.enemyAttackLeft - 5 )
    ) {
      let action = {
        type: 'SETENEMYATTACKTOFALSE'
      };
      this.props.dispatch(action);

      this.setState({
        attack: false,
        leftAttack: null,
        topAttack: null
      });

      let anotheraction = {
        type: 'BLOCKFRIEZAATTACKLEFT'
      };
      this.props.dispatch(anotheraction);


      let misslelandLeft = enemyAttackIntervalArray.pop()
      clearInterval(misslelandLeft)
      clearInterval(leftAttackProjectile.pop())


    } // end of the else if for the attack left 1
    else if (( this.state.topAttack > this.props.enemyAttackTop2 - 30 && this.state.topAttack < this.props.enemyAttackTop2 + 30 )
    && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack > this.props.enemyAttackLeft2 - 5 )
  ) {


        let action = {
          type: 'SETENEMYATTACK2TOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)
        clearInterval(leftAttackProjectile.pop())


  } // end of the else if statement for the attack 2 for vegeta

  }), 7 ) // end of the set Interval for left attack
  ) // end of the leftAttackProjectile push
}) // end of the setState

    } // end of the if statement for the attack left two
    else if (event.type.type === 'ATTACKLEFT TWO SECONDONE' ) {

      this.setState({
        attack2: true,
        leftAttack2: this.props.attackLeft2,
        topAttack2: this.props.attackTop2,
        degree: this.props.degree
      }, () => {

        leftAttackProjectile2.push(setInterval(
          () =>  this.setState({
          leftAttack2: this.state.leftAttack2 - 5,
          topAttack2: this.state.topAttack2
        }, () => { if (this.state.leftAttack2 < 0) {
          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          })
          clearInterval(leftAttackProjectile2.pop())
        } else if (  (this.state.leftAttack2 < this.props.enemyLeft + 20 && this.state.leftAttack2 > this.props.enemyLeft - 20)
          && (this.state.topAttack2 > this.props.enemyTop - 50 && this.state.topAttack2 < this.props.enemyTop + 105  )
                ) {

                  let action = {
                    type: 'HITFRIEZALEFT'
                  }
                this.props.dispatch(action)

          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          })
          clearInterval(leftAttackProjectile2.pop())

        } // end of the else if statement for left attack
        else if (( this.state.topAttack2 > this.props.enemyAttackTop - 30 && this.state.topAttack2 < this.props.enemyAttackTop + 30 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft - 5 )
      ) {
        let action = {
          type: 'SETENEMYATTACKTOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack2: false,
          leftAttack2: null,
          topAttack2: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray.pop()
        clearInterval(misslelandLeft)
        clearInterval(leftAttackProjectile2.pop())


      } // end of the else if statement for the top attack2--
      else if (
        ( this.state.topAttack2 > this.props.enemyAttackTop2 - 30 && this.state.topAttack2 < this.props.enemyAttackTop2 + 30 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 5 )
      ) {

        let action = {
          type: 'SETENEMYATTACK2TOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack2: false,
          leftAttack2: null,
          topAttack2: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)
        clearInterval(leftAttackProjectile2.pop())

      }

    }), 7 ) // end of the set Interval for left attack
      ) // end of the leftAttackProjectile push
      }) // end of the setState


    } // left attack second one for player 2

    else if ( event.type.type === 'ATTACKLEFT TWO THIRDONE' ) {


      this.setState({
        attack3: true,
        leftAttack3: this.props.attackLeft3,
        topAttack3: this.props.attackTop3,
        degree: this.props.degree
      }, () => {

        leftAttackProjectile3.push(setInterval(
          () =>  this.setState({
          leftAttack3: this.state.leftAttack3 - 5,
          topAttack3: this.state.topAttack3
        }, () => { if (this.state.leftAttack3 < 0) {
          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          })
          clearInterval(leftAttackProjectile3.pop())
        } else if (  (this.state.leftAttack3 < this.props.enemyLeft + 20 && this.state.leftAttack3 > this.props.enemyLeft - 20)
          && (this.state.topAttack3 > this.props.enemyTop - 50 && this.state.topAttack3 < this.props.enemyTop + 105  )
                ) {

                  let action = {
                    type: 'HITFRIEZALEFT'
                  }
                this.props.dispatch(action)

          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          })
          clearInterval(leftAttackProjectile3.pop())

        } // end of the else if statement for left attack
        else if (( this.state.topAttack3 > this.props.enemyAttackTop - 30 && this.state.topAttack3 < this.props.enemyAttackTop + 30 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft - 5 )
      ) {
        let action = {
          type: 'SETENEMYATTACKTOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack3: false,
          leftAttack3: null,
          topAttack3: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray.pop()
        clearInterval(misslelandLeft)
        clearInterval(leftAttackProjectile3.pop())


      } // end of the else if statement for the top attack2--
      else if (
        ( this.state.topAttack3 > this.props.enemyAttackTop2 - 30 && this.state.topAttack3 < this.props.enemyAttackTop2 + 30 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 5 )
      ) {

        let action = {
          type: 'SETENEMYATTACK2TOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack3: false,
          leftAttack3: null,
          topAttack3: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)
        clearInterval(leftAttackProjectile3.pop())

      }

    }), 7 ) // end of the set Interval for left attack
      ) // end of the leftAttackProjectile push
      }) // end of the setState

    } // end of the else if for the left attack 3 for vegeta



  else if (event.type.type === 'ATTACKRIGHT TWO') {

    this.setState({
      attack: true,
      leftAttack: this.props.leftAttack,
      topAttack: this.props.topAttack,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile.push(setInterval(
        () => this.setState({
          leftAttack: this.state.leftAttack + 5,
          topAttack: this.state.topAttack
        }, () => { if (this.state.leftAttack > window.innerWidth) {
          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          })
          clearInterval(rightAttackProjectile.pop())

        }  // end of the if
        else if ( (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 30)
          && (this.state.topAttack < this.props.enemyTop + 80 && this.state.topAttack > this.props.enemyTop - 30)
       ) {

         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack: false,
         leftAttack: null,
         topAttack: null
       })
       clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack > this.props.enemyAttackTop - 35 && this.state.topAttack < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft + 40 && this.state.leftAttack > this.props.enemyAttackLeft - 40 )
       ) {


         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack

       } // handling frieza's attack 1

       else if (
         ( this.state.topAttack > this.props.enemyAttackTop2 - 35 && this.state.topAttack < this.props.enemyAttackTop2 + 35 )
       && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack > this.props.enemyAttackLeft2 - 40 )

       ) {


         let action = {
           type: 'SETENEMYATTACK2TOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);




         let misslelandRight = enemyAttackIntervalArray2.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack


       }

      } ), 7 )) // end of the push into the rightAttackProjectile
    }

    )
  } // closing for the else if for the right attack one for vegeta
  else if ( event.type.type === 'ATTACKRIGHT TWO SECONDONE' ) {


    this.setState({
      attack2: true,
      leftAttack2: this.props.attackLeft2,
      topAttack2: this.props.attackTop2,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile2.push(setInterval(
        () => this.setState({
          leftAttack2: this.state.leftAttack2 + 5,
          topAttack2: this.state.topAttack2
        }, () => { if (this.state.leftAttack2 > window.innerWidth) {
          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          })
          clearInterval(rightAttackProjectile2.pop())
        }  // end of the if
        else if ( (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 30)
          && (this.state.topAttack2 < this.props.enemyTop + 80 && this.state.topAttack2 > this.props.enemyTop - 30)
       ) {

         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack2: false,
         leftAttack2: null,
         topAttack2: null
       })
       clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack2 > this.props.enemyAttackTop - 35 && this.state.topAttack2 < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft - 40 )
       ) {

         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack2: false,
           leftAttack2: null,
           topAttack2: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack

        } // end of the else if for the frieza attack and player attack collision


        else if (
          ( this.state.topAttack2 > this.props.enemyAttackTop2 - 35 && this.state.topAttack2 < this.props.enemyAttackTop2 + 35 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 40 )

        ) {

          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKRIGHT'
          };
          this.props.dispatch(anotheraction);


          let misslelandRight = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandRight)
          clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack


        }


      } ), 7 )) // end of the push into the rightAttackProjectile
    }

    )



  } // closing for the else if for the right attack 2 for vegeta
  else if ( event.type.type === 'ATTACKRIGHT TWO THIRDONE' ) {



    this.setState({
      attack3: true,
      leftAttack3: this.props.attackLeft3,
      topAttack3: this.props.attackTop3,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile3.push(setInterval(
        () => this.setState({
          leftAttack3: this.state.leftAttack3 + 5,
          topAttack3: this.state.topAttack3
        }, () => { if (this.state.leftAttack3 > window.innerWidth) {
          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          })
          clearInterval(rightAttackProjectile3.pop())
        }  // end of the if
        else if ( (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 30)
          && (this.state.topAttack3 < this.props.enemyTop + 80 && this.state.topAttack3 > this.props.enemyTop - 30)
       ) {

         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack3: false,
         leftAttack3: null,
         topAttack3: null
       })
       clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack3 > this.props.enemyAttackTop - 35 && this.state.topAttack3 < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft - 40 )
       ) {

         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack3: false,
           leftAttack3: null,
           topAttack3: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack

        } // end of the else if for the frieza attack and player attack collision


        else if (
          ( this.state.topAttack3 > this.props.enemyAttackTop2 - 35 && this.state.topAttack3 < this.props.enemyAttackTop2 + 35 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 40 )

        ) {

          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKRIGHT'
          };
          this.props.dispatch(anotheraction);


          let misslelandRight = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandRight)
          clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack


        }


      } ), 7 )) // end of the push into the rightAttackProjectile
    }

  ) // end of setState




  } // end of the else if for the right attack 3
  else if (event.type.type === 'ATTACKDOWN TWO') {



    this.setState({
      attack: true,
      leftAttack: this.props.leftAttack,
      topAttack: this.props.topAttack,
      degree: this.props.degree
    }, () => {
      downAttackProjectile.push(setInterval(
        () =>  this.setState({
        leftAttack: this.state.leftAttack,
        topAttack: this.state.topAttack + 5
      }, () => { if (this.state.topAttack > window.innerHeight) {
        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })
        clearInterval(downAttackProjectile.pop())
      }  // end of the if statement
      else if ( (this.state.topAttack > this.props.enemyTop - 30 && this.state.topAttack < this.props.enemyTop + 30)
            && (this.state.leftAttack < this.props.enemyLeft + 40 && this.state.leftAttack > this.props.enemyLeft - 60 )

       ) {


           let action = {
             type: 'HITFRIEZADOWN'
           }
         this.props.dispatch(action)

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         })

         clearInterval(downAttackProjectile.pop())
      }  // end of the else if statement


    }), 7 ) // end of the set interval for the downAttackProjectile
  ) // end of the push into the downAttackProjectile array
  }) // end of the setState for the down attack


} // end of th else if for the downattack 2
else if (event.type.type === 'ATTACKDOWN TWO SECONDONE') {

  this.setState({
    attack2: true,
    leftAttack2: this.props.attackLeft2,
    topAttack2: this.props.attackTop2,
    degree: this.props.degree
  }, () => {
    downAttackProjectile2.push(setInterval(
      () =>  this.setState({
      leftAttack2: this.state.leftAttack2,
      topAttack2: this.state.topAttack2 + 5
    }, () => { if (this.state.topAttack2 > window.innerHeight) {
      this.setState({
        attack2: false,
        leftAttack2: null,
        topAttack2: null
      })
      clearInterval(downAttackProjectile2.pop())
    }  // end of the if statement
    else if ( (this.state.topAttack2 > this.props.enemyTop - 30 && this.state.topAttack2 < this.props.enemyTop + 30)
          && (this.state.leftAttack2 < this.props.enemyLeft + 40 && this.state.leftAttack2 > this.props.enemyLeft - 60 )

     ) {


         let action = {
           type: 'HITFRIEZADOWN'
         }
       this.props.dispatch(action)

       this.setState({
         attack2: false,
         leftAttack2: null,
         topAttack2: null
       })

       clearInterval(downAttackProjectile2.pop())
    }  // end of the else if statement


  }), 7 ) // end of the set interval for the downAttackProjectile2
) // end of the push into the downAttackProjectile2 array
}) // end of the setState for the down attack
} // end of the else if for the second down attack
      else if (event.type.type === 'ATTACKDOWN TWO THIRDONE') {

        this.setState({
          attack3: true,
          leftAttack3: this.props.attackLeft3,
          topAttack3: this.props.attackTop3,
          degree: this.props.degree
        }, () => {
          downAttackProjectile3.push(setInterval(
            () =>  this.setState({
            leftAttack3: this.state.leftAttack3,
            topAttack3: this.state.topAttack3 + 5
          }, () => { if (this.state.topAttack3 > window.innerHeight) {
            this.setState({
              attack3: false,
              leftAttack3: null,
              topAttack3: null
            })
            clearInterval(downAttackProjectile3.pop())
          }  // end of the if statement
          else if ( (this.state.topAttack3 > this.props.enemyTop - 30 && this.state.topAttack3 < this.props.enemyTop + 30)
                && (this.state.leftAttack3 < this.props.enemyLeft + 40 && this.state.leftAttack3 > this.props.enemyLeft - 60 )

           ) {


               let action = {
                 type: 'HITFRIEZADOWN'
               }
             this.props.dispatch(action)

             this.setState({
               attack3: false,
               leftAttack3: null,
               topAttack3: null
             })

             clearInterval(downAttackProjectile3.pop())
          }  // end of the else if statement


        }), 7 ) // end of the set interval for the downAttackProjectile2
      ) // end of the push into the downAttackProjectile2 array
      }) // end of the setState for the down attack




    } // end of the event.type.type === attackdown two thirdOne
    else if (event.type.type === 'ATTACKUP TWO') {

      this.setState({
        attack: true,
        leftAttack: this.props.leftAttack,
        topAttack: this.props.topAttack,
        degree: this.props.degree
      }, () => {
        upAttackProjectile.push(setInterval(
          () =>  this.setState({
          leftAttack: this.state.leftAttack,
          topAttack: this.state.topAttack - 5
        }, () => { if (this.state.topAttack < 0) {
          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          }) // end of the setState
          clearInterval(upAttackProjectile.pop())
        } // end of the if statement
        else if (
          ( this.state.topAttack < this.props.enemyTop + 100 && this.state.topAttack > this.props.enemyTop )
          && (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 20)
        ) {

          let action = {
            type: 'HITFRIEZAUP'
          }
        this.props.dispatch(action)

        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        }) // end of this this state within the else if statement

        clearInterval(upAttackProjectile.pop())

        } // end of the else if
      }), 7 ) // end of the setInterval
    ) // end of the upAttackProjectile
    })  // end of the setState


  } // closing of the else if upattack 2
      else if (event.type.type === 'ATTACKUP TWO SECONDONE') {

        this.setState({
          attack2: true,
          leftAttack2: this.props.attackLeft2,
          topAttack2: this.props.attackTop2,
          degree: this.props.degree
        }, () => {
          upAttackProjectile2.push(setInterval(
            () =>  this.setState({
            leftAttack2: this.state.leftAttack2,
            topAttack2: this.state.topAttack2 - 5
          }, () => { if (this.state.topAttack2 < 0) {
            this.setState({
              attack2: false,
              leftAttack2: null,
              topAttack2: null
            }) // end of the setState
            clearInterval(upAttackProjectile2.pop())
          } // end of the if statement
          else if (
            ( this.state.topAttack2 < this.props.enemyTop + 100 && this.state.topAttack2 > this.props.enemyTop )
            && (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 20)
          ) {

            let action = {
              type: 'HITFRIEZAUP'
            }
          this.props.dispatch(action)

          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          }) // end of this this state within the else if statement

          clearInterval(upAttackProjectile2.pop())

          } // end of the else if
        }), 7 ) // end of the setInterval
      ) // end of the upAttackProjectile
      })  // end of the setState


    } // end of the else if for up attack 2 for vegeta
    else if (event.type.type === 'ATTACKUP TWO THIRDONE') {

      this.setState({
        attack3: true,
        leftAttack3: this.props.attackLeft3,
        topAttack3: this.props.attackTop3,
        degree: this.props.degree
      }, () => {
        upAttackProjectile3.push(setInterval(
          () =>  this.setState({
          leftAttack3: this.state.leftAttack3,
          topAttack3: this.state.topAttack3 - 5
        }, () => { if (this.state.topAttack3 < 0) {
          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          }) // end of the setState
          clearInterval(upAttackProjectile3.pop())
        } // end of the if statement
        else if (
          ( this.state.topAttack3 < this.props.enemyTop + 100 && this.state.topAttack3 > this.props.enemyTop )
          && (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 20)
        ) {

          let action = {
            type: 'HITFRIEZAUP'
          }
        this.props.dispatch(action)

        this.setState({
          attack3: false,
          leftAttack3: null,
          topAttack3: null
        }) // end of this this state within the else if statement

        clearInterval(upAttackProjectile3.pop())

        } // end of the else if
      }), 7 ) // end of the setInterval
    ) // end of the upAttackProjectile
    })  // end of the setState


  } // end of the else if for third attack up for vegeta



} // closing of the handle received




  render() {
    if (this.state.leftAttack < 0) {

      while (leftAttackProjectile.length > 0) {

        let leftattackInstance = leftAttackProjectile.pop()
        clearInterval(leftattackInstance)
      }
    }  // this is the first attack left.
    else if (this.state.leftAttack > window.innerWidth) {
      while(rightAttackProjectile.length > 0) {

        let rightattackInstance = rightAttackProjectile.pop()
        clearInterval(rightattackInstance)
      }
    }   else if (this.state.leftAttack2 > window.innerWidth) {
      while(rightAttackProjectile2.length > 0) {
        let rightattackInstance = rightAttackProjectile2.pop()
        clearInterval(rightattackInstance)
      }
    }
    else if (this.state.leftAttack2 < 0) {

        while(leftAttackProjectile2.length > 0) {
          let leftattackInstance = leftAttackProjectile2.pop()
          clearInterval(leftattackInstance)
        }
      } else if ( this.state.leftAttack3 > window.innerWidth ) {
        while(rightAttackProjectile3.length > 0) {
          let rightattackInstance = rightAttackProjectile3.pop()
          clearInterval(rightattackInstance)
        }
      } else if (this.state.leftAttack3 < 0) {
        while(leftAttackProjectile3.length > 0) {
          let leftattackInstance = leftAttackProjectile3.pop()
          clearInterval(leftattackInstance)
        }
      } else if (this.state.topAttack > window.innerHeight) {
        while(downAttackProjectile.length > 0) {
          clearInterval(downAttackProjectile.pop())
        }
      } else if (this.state.topAttack2 > window.innerHeight) {
        while(downAttackProjectile2.length > 0) {
          clearInterval(downAttackProjectile2.pop())
        }
      } else if (this.state.topAttack3 > window.innerHeight) {
        while(downAttackProjectile3.length > 0) {
          clearInterval(downAttackProjectile3.pop())
        }
      } else if (this.state.topAttack < 0) {
        while(upAttackProjectile.length > 0) {
          clearInterval(upAttackProjectile.pop())
        }
      } else if (this.state.topAttack2 < 0) {
        while(upAttackProjectile2.length > 0) {
          clearInterval(upAttackProjectile2.pop())
        }
      } else if (this.state.topAttack3 < 0) {
        while(upAttackProjectile3.length > 0) {
          clearInterval(upAttackProjectile3.pop())
        }
      }

    return (
      <React.Fragment>
        <ActionCable
          channel={{ channel: 'MoveTwosChannel' }}
          onReceived={this.handleReceived}
          />
        <img src={this.props.image} alt='vegeta' style={{position: 'absolute', top: `${this.props.top}px`, left: `${this.props.left}px`, width: `${this.props.width}%`}} />
        {this.state.attack === true ? <SecondPlayerAttack leftAttack={this.state.leftAttack} topAttack={this.state.topAttack} degree={this.state.degree}/> : null}
        {this.state.attack2 === true ? <SecondPlayerAttack leftAttack={this.state.leftAttack2} topAttack={this.state.topAttack2} degree={this.state.degree}/> : null}
        {this.state.attack3 === true ? <SecondPlayerAttack leftAttack={this.state.leftAttack3} topAttack={this.state.topAttack3} degree={this.state.degree}/> : null}
      </React.Fragment>
    )
  }
}


  const mapStateToProps = (state) => {
    return {
      top: state.secondPlayerCoordinates.top,
      left: state.secondPlayerCoordinates.left,
      playerHealth: state.secondPlayerCoordinates.playerHealth,
      clicked: state.playerCoordinates.clicked,
      image: state.secondPlayerCoordinates.defaultDirection.image,
      width: state.secondPlayerCoordinates.defaultDirection.width,
      attack: state.secondPlayerCoordinates.attack,
      characterdirection: state.secondPlayerCoordinates.defaultDirection.characterdirection,
      leftAttack: state.secondPlayerCoordinates.attackLeft,
      topAttack: state.secondPlayerCoordinates.attackTop,
      degree: state.secondPlayerCoordinates.degree,
      enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
      enemyAttackTop: state.playerCoordinates.enemyAttackTop,
      enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2,
      enemyAttackTop2: state.playerCoordinates.enemyAttackTop2,
      enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft,
      attackLeft2: state.secondPlayerCoordinates.attackLeft2,
      attackTop2: state.secondPlayerCoordinates.attackTop2,
      attackLeft3: state.secondPlayerCoordinates.attackLeft3,
      attackTop3: state.secondPlayerCoordinates.attackTop3
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(SecondPlayer);
