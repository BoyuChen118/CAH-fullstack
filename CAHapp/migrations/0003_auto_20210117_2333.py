# Generated by Django 3.1.4 on 2021-01-18 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CAHapp', '0002_auto_20210117_2314'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='name',
        ),
        migrations.AlterField(
            model_name='person',
            name='displayName',
            field=models.CharField(default='', max_length=10, unique=True),
        ),
    ]
