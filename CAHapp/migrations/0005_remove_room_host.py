# Generated by Django 3.1.4 on 2021-01-19 00:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CAHapp', '0004_person_roomcode'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='host',
        ),
    ]