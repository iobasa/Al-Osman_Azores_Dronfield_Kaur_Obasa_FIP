import UserComponent from './UserComponent.js';

//DO NOT TOUCH THIS COMPONENT OR CODE IN THSI COMPONENT!!!!!! 
// this is the back part of the site like when you sign in this is the dashboard

export default {

	template: `
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="user-message">{{ message }}</h1>
			</div>
        </div>
        
		<h2>User preferences</h2>
    <a href="admin/admin_createuser.php">Create User</a>
    <a href="admin/admin_deleteuser.php">Delete User</a>
    <a href="admin/admin_edituser.php">Edit User</a>

    <br><br>
    <h2>Content Management</h2>
    <a href="admin/admin_addcontent.php">Add Content</a>
    <a href="admin/admin_contentlist.php">Edit and Delete Content</a>
    <br><br><br>
    <a href="admin/admin_logout.php">Sign Out</a>

	</div>
	`,

	created: function () {
		this.fetchAllUsers();
	},

	data() {
		return {
			message: `HELLO!`,

			userList: []
		}
	},

	methods: {
		fetchAllUsers(){
			let url = ('./admin/index_admin.php');

			fetch(url)
			.then(res => res.json())
			.then(data => {
				this.userList = data;
			})
			.catch((err) => console.error(err));
		}
	},


components: {
	user: UserComponent
}

}