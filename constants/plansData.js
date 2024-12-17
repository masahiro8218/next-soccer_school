import { FaWalking } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
 
 
 
export const plansData=[
  {
    icon:<FaWalking/>,
    name:'初級',
    price:'無料',
    features:[
      '基本的なボールコントロール',
      '簡単なゲーム形式の練習',
      '基礎的な体力作り',
      'チームワークとコミュニケーションの強化',
    ]
  },
  {
    icon:<RiTeamFill/>,
    name:'中級',
    price:'300',
    features:[
      'ドリブルとフェイントの応用',
      'パスワークと連携プレー',
      '攻守の切り替えの理解',
      '戦術理解とポジショニング',
    ]
  },
  {
    icon:<RiVipCrownFill/>,
    name:'上級',
    price:'500',
    features:[
      'プレッシャー下でのボールコントロール',
      '高度な戦術の理解と実践',
      '個人の特性を活かしたプレー',
      '試合の流れを読む力と判断力',
    ]
  },
]