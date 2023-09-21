import { useState, useEffect } from "react"
import { getPlayerStats } from "../lib/apiWrapper"
import axios from "axios"
import Aside from "../components/Aside"
import FluteNav from "../components/FluteNav"
import UserType from "../types/auth"

type Props = {
    loggedInUser: UserType|null
    isLoggedIn: boolean
}

export default function PlayerStats({ loggedInUser, isLoggedIn }: Props) {
    const [playerName, setPlayerName] = useState<string>('');
    const [playerStats, setPlayerStats] = useState<any>([]);

    const [error, setError] = useState<string | null>(null);
    const [playerFound, setPlayerFound] = useState(false)

  const handlePlayerNameChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };


  useEffect(() => {
    async function fetchData(){
        const response = await getPlayerStats(playerName);
        console.log(response.data)
        if (response.data){
            setPlayerStats(response.data)
            console.log(playerStats)
        }
    };

    fetchData();
}, [setPlayerStats])

    const clearData = () => {
        window.location.reload()
    }

  const getPlayerName = async () => {
    try {
      const response = await axios.get(`https://api.wiseoldman.net/v2/players/${playerName}`);
      console.log(response.data)
    
      
      console.log(playerStats)
      if (response.status === 200) {
        let stats = response.data
          setPlayerStats(stats);
        console.log(playerStats)
        setPlayerFound(true)
        setError(null);
      } else {
        setPlayerStats([]);
      }
    } catch (err) {
      setPlayerStats([]);
    }
  };

  return (
    <>
        {isLoggedIn && <div className="content">
            <FluteNav />
            <div className="mid-content-stats">
                <div className="mid-contain">
                    <div className="player-levels-box">
                        <div className="spacing">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Attack.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.attack.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Hitpoints.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.hitpoints.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Mining.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.mining.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Strength.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.strength.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Agility.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.agility.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Smithing.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.smithing.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Defence.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.defence.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Herblore.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.herblore.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Fishing.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.fishing.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Range.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.ranged.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Theiving.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.thieving.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Cooking.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.cooking.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Prayer.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.prayer.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Crafting.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.crafting.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Firemaking.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.firemaking.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Magic.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.magic.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Fletching.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.fletching.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Woodcutting.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.woodcutting.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Runecrafting.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.runecrafting.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Slayer.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.slayer.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Farming.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.farming.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Construction.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.construction.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain">
                                <div className="stat-items">
                                    <div className="skill-img-spacing">
                                        <img src="Hunter.png" alt="" className="skill-img"/>
                                    </div>
                                    <div className="skill-level-spacing">
                                        {playerFound && <p className="skill-level"><strong>{playerStats.latestSnapshot.data.skills.hunter.level}</strong></p>}
                                    </div>
                                </div>
                            </div>
                            <div className="level-contain-total">
                                <div className="total-level-spacing text-center">
                                    <h4>Total Level</h4>
                                    {playerFound && <p>{playerStats.latestSnapshot.data.skills.overall.level}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total-levels-bosses">
                        <div className="total-level-exp">
                            <div className="spacing-combat-level">
                                <div className="combat-level">
                                    <div className="combat-level-contain">
                                        <div className="combat-img-spacing">
                                            <img src="Combat.png" alt="" className="combat-img"/>
                                        </div>
                                        <div className="combat-level-spacing">
                                            <div className="more-combat-spacing">
                                                {playerFound && <p className="combat-level-text"><strong>{playerStats.combatLevel}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="points">
                            <div className="contain-spacing">
                                <div className="spacing-points">
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="cluescroll.png" alt="" className="cluescroll-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.clue_scrolls_all.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="Leagues.png" alt="" className="cluescroll-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.league_points.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="lms.webp" alt="" className="cluescroll-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.last_man_standing.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="Soulwars.webp" alt="" className="cluescroll-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.league_points.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-points">
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="Guardiansoftherift.png" alt="" className="gotr-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.guardians_of_the_rift.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="bountyhunterrouge.webp" alt="" className="gotr-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.league_points.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="bountyhunterhunter.webp" alt="" className="gotr-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.league_points.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="points-contain">
                                        <div className="activity-items">
                                            <div className="cluescroll-img">
                                                <img src="Duelarena.png" alt="" className="gotr-image-size" />
                                            </div>
                                            <div className="cluescroll-points">
                                                {playerFound && <p className="clue-scroll-score"><strong>{playerStats.latestSnapshot.data.activities.league_points.score}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boss-kills">
                            <div className="contain-spacing">
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Abyssal_sire.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.abyssal_sire.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Hydra_icon.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.alchemical_hydra.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Artio.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.artio.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Verac's_helm.png" alt="" className="veracs-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.barrows_chests.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Bryophyta.png" alt="" className="veracs-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.bryophyta.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Callisto.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.callisto.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Vet'ion.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.calvarion.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Cerberus_icon.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.cerberus.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Olmlet.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.chambers_of_xeric.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Metamorphic_dust.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.chambers_of_xeric_challenge_mode.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="ChaosElemental.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.chaos_elemental.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Ancient staff.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.chaos_fanatic.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Zilyana.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.commander_zilyana.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Corporeal_Beast.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.corporeal_beast.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Crazy_archaeologist.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.crazy_archaeologist.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Dagannoth_Prime.png" alt="" className="dagannoth-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.dagannoth_prime.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Dagannoth Rex.png" alt="" className="dagannoth-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.dagannoth_rex.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Dagannoth Supreme.png" alt="" className="dagannoth-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.dagannoth_supreme.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Deranged_archaeologist.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.deranged_archaeologist.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Duke.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.duke_sucellus.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Graador.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.general_graardor.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Baby mole.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.giant_mole.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Noon detail.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.grotesque_guardians.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Hespori.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.hespori.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Kq head detail.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.kalphite_queen.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Kbd heads detail.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.king_black_dragon.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Kraken.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.kraken.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Kree'arra.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.kreearra.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="K'ril Tsutsaroth.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.kril_tsutsaroth.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="The Mimic.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.mimic.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Nex.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.nex.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="nightmare.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.nightmare.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Obor.png" alt="" className="obor-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.obor.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Phantom Muspah.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.phantom_muspah.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Parasitic egg.png" alt="" className="egg-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.phosanis_nightmare.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Sarachnis.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.sarachnis.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Scorpia.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.scorpia.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Skotos.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.skotizo.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Spindel.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.spindel.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Tiny tempoross.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.tempoross.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Corrupted_Gauntlet.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.the_corrupted_gauntlet.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Gauntlet.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.the_gauntlet.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Leviathon.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.the_leviathan.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="The whisperer.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.the_whisperer.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Verzik.png" alt="" className="verzik-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.theatre_of_blood.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="TheatreOfBloodChallenge.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.theatre_of_blood_hard_mode.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Smoke_devil_icon.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.thermonuclear_smoke_devil.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="tombsofamascut.webp" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.tombs_of_amascut.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="tombsofamascutexpert.webp" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.tombs_of_amascut_expert.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="TzTok-Jad.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.tztok_jad.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="TzKal-Zuk.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.tzkal_zuk.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Wintertodt.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.wintertodt.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing-kill-totals">
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Zulrah.png" alt="" className="boss-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.zulrah.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boss-contain">
                                        <div className="boss-items">
                                            <div className="boss-img">
                                                <img src="Vorkath.png" alt="" className="vorkath-image-size" />
                                            </div>
                                            <div className="boss-killcount-spacing">
                                                {playerFound && <p className="boss-killcount"><strong>{playerStats.latestSnapshot.data.bosses.vorkath.kills}</strong></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loot-stats">
                        <div className="top-drops">
                            <div className="spacing-drop">
                                <div className="drop-contains">

                                </div>
                            </div>
                            <div className="spacing-drop">
                                <div className="drop-contains">

                                </div>
                            </div>
                            <div className="spacing-drop">
                                <div className="drop-contains">

                                </div>
                            </div>
                            <div className="spacing-drop">
                                <div className="drop-contains">

                                </div>
                            </div>
                            <div className="spacing-drop">
                                <div className="drop-contains">

                                </div>
                            </div>
                        </div>
                        <div className="last-kill">
                            <div className="spacing-last-kill">
                                <div className="kill-contains">

                                </div>
                            </div>
                        </div>
                        <div className="boss-kill-streak">
                            <div className="spacing-boss-kill-streak">
                                <div className="boss-kill-streak-contains">

                                </div>
                            </div>
                        </div>
                        <div className="clan">
                            <div className="spacing-clan">
                                <div className="clan-contains">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Aside getPlayerName={getPlayerName} playerName={playerName} handleChange={handlePlayerNameChange} delData={clearData} loggedInUser={loggedInUser}/>
        </div>}
    </>
  )
}