import GoalProgress from '../components/GoalProgress'

export default () =>
	<GoalProgress current={10}
				  goal={20}
				  onNewGoal={goal => console.log('todo: change goal', goal)} />
				  