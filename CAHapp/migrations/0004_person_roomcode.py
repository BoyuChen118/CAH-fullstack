# Generated by Django 3.1.4 on 2021-01-19 00:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CAHapp', '0003_auto_20210117_2333'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='roomcode',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='CAHapp.room'),
        ),
    ]