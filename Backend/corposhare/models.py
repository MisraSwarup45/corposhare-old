from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
from .manager import *
# Create your models here.


class User(AbstractBaseUser):
        
	email = models.EmailField(
	verbose_name='Email',
	max_length=255,
	unique=True,
	)
	name = models.CharField(max_length=200)
	# tc = models.BooleanField()
	is_active = models.BooleanField(default=True)
	is_admin = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = UserManager()

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['name']

	def __str__(self):
		return self.name

	def has_perm(self, perm, obj=None):
		"Does the user have a specific permission?"
		# Simplest possible answer: Yes, always
		return self.is_admin

	def has_module_perms(self, app_label):
		"Does the user have permissions to view the app `app_label`?" 
		# Simplest possible answer: Yes, always
		return True

	@property
	def is_staff(self):
		"Is the user a member of staff?"
		# Simplest possible answer: All admins are staff
		return self.is_admin



class Company(models.Model):
    
	company_name = models.ForeignKey(User,on_delete=models.CASCADE)
	founder = models.CharField(max_length=200,null=True,blank=True)
	description = models.TextField()
	services_offered = models.TextField()
	logo = models.TextField()
	year_established = models.CharField(max_length=200,null=True,blank=True)
	# valuation = models.CharField(max_length=200,null=True,blank=True)
	employees = models.IntegerField(default=0)
	valuation = models.CharField(max_length=200,null=True,blank=True)

	def __str__(self):
		return str(self.company_name)
	


class Employee(models.Model):

	company = models.ForeignKey(Company,on_delete=models.CASCADE)
	name = models.CharField(max_length=200,null=True,blank=True)
	email = models.EmailField(unique=True,null=True, blank=True)
	profile_pic = models.TextField()
	# bio = models.CharField(max_length=200,null=True,blank=True)
	age = models.IntegerField(default=18)
	sex = models.CharField(max_length=200,null=True,blank=True)
	education = models.CharField(max_length=200,null=True,blank=True)
	skills = models.TextField()
	experience = models.IntegerField(default=1)
	address1 = models.CharField(max_length=200,null=True,blank=True)
	address2 = models.CharField(max_length=200,null=True,blank=True)
	zip_code = models.CharField(max_length=200,null=True,blank=True)
	resume = models.TextField()
	department = models.TextField()
	contact = models.CharField(max_length=200,null=True, blank=True)
	hire_date = models.DateField()

	def __str__(self):
		return self.name
	



class Project(models.Model):

	comapny = models.ForeignKey(Company,on_delete=models.CASCADE)
	title = models.CharField(max_length=200,null=True,blank=True)
	email = models.EmailField(max_length=255,null=True, blank=True)
	contact_number = models.CharField(max_length=50,null=True, blank=True)
	employees_required = models.IntegerField(default=0)
	skills_req = models.TextField()
	time_tobe_dedicated = models.TextField()
	pay = models.TextField()
	duration = models.CharField(max_length=200,null=True,blank=True)
	description = models.TextField(max_length=200,null=True,blank=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	image = models.TextField(blank=True)

	def __str__(self):
		return str(self.title)