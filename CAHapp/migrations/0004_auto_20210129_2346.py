# Generated by Django 3.1.5 on 2021-01-30 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CAHapp', '0003_auto_20210126_2107'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='cardtext',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='room',
            name='pick',
            field=models.IntegerField(default=0),
        ),
    ]