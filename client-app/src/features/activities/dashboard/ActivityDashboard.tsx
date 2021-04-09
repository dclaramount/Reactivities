import {Grid} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';
import ActivitiesList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string)=>void;
    closeForm: ()=>void;
    createorEdit: (activity: Activity)=> void;
    deleteActivity: (id: string) => void;

}

export default function ActivityDashboard({ activities, 
                                            selectActivity, 
                                            selectedActivity, 
                                            cancelSelectActivity,
                                            openForm,
                                            closeForm,
                                            createorEdit,
                                            deleteActivity,
                                            editMode}: 
                                            Props)
{
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivitiesList activities={activities} 
                                selectActivity={selectActivity}
                                deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails    activity={selectedActivity} 
                                    cancelSelectActivity={cancelSelectActivity}
                                    openForm={openForm}/>}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createorEdit={createorEdit}/>}
            </Grid.Column>
        </Grid>
    )
}